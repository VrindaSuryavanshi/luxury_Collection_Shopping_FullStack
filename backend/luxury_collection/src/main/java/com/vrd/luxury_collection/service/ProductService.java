package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    public Product createProduct(CreateProductRequest req);

    public String deleteProduct(Long ProductId) throws ProductException;

    public Product updateProduct(Long ProductId ,Product req) throws  ProductException;

    public Product findProductById(Long id) throws ProductException;

    public List<Product>  findProductByCategory(String category) ;

    public Page<Product>
    getAllProduct(String category, List<String>colors,
                  List<String>sizea, Integer minPrice ,Integer maxPrice,
                  Integer minDiscount, String sort,String stock , Integer pageNumber,
                  Integer pageSize);

    public List<Product> findAllProduct();
}
