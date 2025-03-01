package com.vrd.luxury_collection;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



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

