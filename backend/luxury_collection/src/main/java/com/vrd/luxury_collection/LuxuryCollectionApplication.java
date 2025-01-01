package com.vrd.luxury_collection;

import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.response.ApiResponse;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Scanner;

@SpringBootApplication
@RestController
public class LuxuryCollectionApplication {

	public static void main(String[] args) {
		SpringApplication.run(LuxuryCollectionApplication.class, args);}

		@GetMapping("/")
		public String apiRoot(){
		System.out.println("welcome to backend...!");
			return "welcome to backend...!";
		}


}

