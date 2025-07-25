package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Category;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.repository.CategoryRepository;
import com.vrd.luxury_collection.repository.ProductRepository;
import com.vrd.luxury_collection.request.CreateProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ProductServiceImplementation implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Product createProduct(CreateProductRequest req) {
        Product product = new Product();
        product.setTitle(req.getTitle());
        product.setColor(req.getColor().toString());
        product.setDescription(req.getDescription());
        product.setDiscountedPrice(req.getDiscountedPrice());
        product.setDiscountPresent(req.getDiscountPresent());
        product.setImageUrl(req.getImageUrl());
        product.setBrand(req.getBrand());
        product.setPrice(req.getPrice());
        product.setSize(req.getSize());
        product.setQuantity(req.getQuantity());
        product.setCreateAt(LocalDateTime.now());

        // Handle Top-Level Category
        Category topLevel = categoryRepository.findByName(req.getTopLevelCategory());
        if (topLevel == null) {
            Category topLevelCategory = new Category();
            topLevelCategory.setName(req.getTopLevelCategory());
            topLevelCategory.setLevel(1);
            topLevel = categoryRepository.save(topLevelCategory);
        }

        // Handle Second-Level Category
        Category secondLevel = categoryRepository.findByNameAndParent(req.getSecondLevelCategory(), topLevel.getName());
        if (secondLevel == null) {
            Category secondLevelCategory = new Category();
            secondLevelCategory.setName(req.getSecondLevelCategory());
            secondLevelCategory.setParentCategory(topLevel);
            secondLevelCategory.setLevel(2);
            secondLevel = categoryRepository.save(secondLevelCategory);
        }

        // Handle Third-Level Category
        Category thirdLevel = categoryRepository.findByNameAndParent(req.getThirdLevelCategory(), secondLevel.getName());
        if (thirdLevel == null) {
            Category thirdLevelCategory = new Category();
            thirdLevelCategory.setName(req.getThirdLevelCategory());
            thirdLevelCategory.setParentCategory(secondLevel);
            thirdLevelCategory.setLevel(3);
            thirdLevel = categoryRepository.save(thirdLevelCategory);
        }

        // Assign Product to Category
        product.setCategory(thirdLevel);

        // Save Product
        Product savedProduct = productRepository.save(product);
        log.info("Fetched product: {}", product.getBrand());
        return savedProduct;
    }

//    public Product createProduct(CreateProductRequest req) {
//
//        Product product = new Product();
//        product.setTitle(req.getTitle());
//        product.setColor(req.getColor());
//        product.setDescription(req.getDescription());
//        product.setDiscountedPrice(req.getDiscountedPrice());
//        product.setDiscountPresent(req.getDiscountPresent());
//        product.setImageUrl(req.getImageUrl());
//        product.setBrand(req.getBrand());
//        product.setPrice(req.getPrice());
//        product.setSize(req.getSize());
//        product.setQuantity(req.getQuantity());
//        product.setCreateAt(LocalDateTime.now());
//
//        Category topLevel =  categoryRepository.findByName(req.getTopLevelCategory());
//
//        if(topLevel==null){
//            Category topLevelCategory = new Category();
//            topLevelCategory.setName(req.getTopLevelCategory());
//            topLevelCategory.setLevel(1);
//
//            topLevel=categoryRepository.save(topLevelCategory);
//        }
//
//        Category secondLevel =
//                categoryRepository.findByNameAndParent(req.getSecondLevelCategory() , topLevel.getName());
//
//        if(secondLevel==null){
//
//            Category secondLevelCategory = new Category();
//            secondLevelCategory.setName(req.getSecondLevelCategory());
//            secondLevelCategory.setParentCategory(topLevel);
//            secondLevelCategory.setLevel(2);
//
//            secondLevel=categoryRepository.save(secondLevelCategory);
//        }
//
//        Category thirdLevel =
//                categoryRepository.findByNameAndParent(req.getThirdLevelCategory(),
//                        secondLevel.getName());
//
//        if(thirdLevel==null){
//
//            Category thirdLevelCategory = new Category();
//            thirdLevelCategory.setName(req.getThirdLevelCategory());
//            thirdLevelCategory.setParentCategory(secondLevel);
//            thirdLevelCategory.setLevel(3);
//
//            thirdLevel=categoryRepository.save(thirdLevelCategory);
//        }
//
//
//        product.setCategory(thirdLevel);
//
//
//        Product savedProduct = productRepository.save(product);
//        log.info("Fetched product: {}", product.getBrand());
//        return savedProduct;
//    }

    @Override
    public String deleteProduct(Long ProductId) throws ProductException {

        Product product = findProductById(ProductId);
        product.getSize().clear();
        productRepository.delete(product);

        return "Product Deleted Successfully.....";
    }

    @Override
    public Product updateProduct(Long ProductId, Product req) throws ProductException {
        Product product = findProductById(ProductId);

        if (req.getQuantity()!=0){
            product.setQuantity(req.getQuantity());
        }
        return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long id) throws ProductException {

        Optional<Product> opt = productRepository.findById(id);
       if(opt.isPresent()){
           return opt.get();
       }
       throw  new ProductException("Product Not Found "+id);

    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return List.of();
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> color, List<String> size, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {

        Pageable pageable = PageRequest.of(pageNumber , pageSize);

        List<Product> products =
                productRepository.filterProducts(category,minPrice,maxPrice,minDiscount,sort);
        if(!color.isEmpty()){
            products= products.stream().filter(p->color.stream().anyMatch(c->c.equalsIgnoreCase(p.getColor())))
                    .collect(Collectors.toList());
        }

        if(stock!=null){
            if(stock.equals("in_stock")){
            products.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
            }
        }else {
            if (stock.equals("out_of_stock")){
                products.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());

            }
        }

        int startIndex =(int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize() , products.size());

        List<Product> pageContent = products.subList(startIndex , endIndex);

        Page<Product> filterProducts = new PageImpl<>(pageContent , pageable , products.size());

        return filterProducts;
    }

    @Override
    public List<Product> findAllProduct() {
        return List.of();
    }
}
