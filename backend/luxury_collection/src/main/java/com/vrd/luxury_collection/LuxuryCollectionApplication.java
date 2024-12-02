package com.vrd.luxury_collection;

import com.vrd.luxury_collection.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@ComponentScan("com.vrd.config")
//@EntityScan("com.vrd.model")
//@EnableJpaRepositories("com.vrd.repository")
public class LuxuryCollectionApplication {

	public static void main(String[] args) {
		SpringApplication.run(LuxuryCollectionApplication.class, args);

		User u = new User();
		System.out.println(u.toString());
	}



}
