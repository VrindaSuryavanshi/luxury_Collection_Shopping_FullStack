package com.vrd.luxury_collection.controller;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.request.CreateProductRequest;
import com.vrd.luxury_collection.response.ApiResponse;
import com.vrd.luxury_collection.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;
@Slf4j
@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<?> createProduct(@RequestBody CreateProductRequest req) throws ProductException {
        if (req == null) {
            return ResponseEntity.ok("No specific product requested.");
        }
             Product product = productService.createProduct(req);

            return new ResponseEntity<Product>(product, HttpStatus.CREATED);

    }
    @DeleteMapping("/{productID}/delete")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productID)throws ProductException{
        productService.deleteProduct(productID);
        ApiResponse res=new ApiResponse();
        res.setMessage("Product Deleted Successfully");
        res.setSuccess(true);
        return new ResponseEntity<>(res,HttpStatus.OK);

    }


    @GetMapping("/all")
    public ResponseEntity<List<Product>> findAllProduct(){
        List<Product> products=productService.findAllProduct();
        return new ResponseEntity<>(products ,HttpStatus.OK);

    }

    @PutMapping("/{productID}/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product req , @PathVariable Long productID)throws ProductException{

        Product product = productService.updateProduct(productID,req);
        return new ResponseEntity<Product>(product,HttpStatus.CREATED);
    }

    @PostMapping("/creates")
    public ResponseEntity<ApiResponse> createMultipleProducts(@RequestBody CreateProductRequest[] req){

        for (CreateProductRequest productRequest : req){
            productService.createProduct(productRequest);
        }

        ApiResponse res=new ApiResponse();
        res.setMessage("Product created Successfully");
        res.setSuccess(true);
        return new ResponseEntity<ApiResponse>(res,HttpStatus.OK);

    }


}
