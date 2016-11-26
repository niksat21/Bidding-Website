package edu.utdallas.cs6314;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class WplApplication {
    public static void main(String[] args) {
        SpringApplication.run(WplApplication.class, args);
    }
}
