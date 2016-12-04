package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.AuthenticationInfo;
import edu.utdallas.cs6314.domain.model.ExistingUser;
import edu.utdallas.cs6314.domain.model.User;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
public interface UserService {

    List<User> getAllUsers();

    @Cacheable(value = "users", key = "#userId")
    User getUser(String userId);

    @CachePut(value = "users", key = "#user.userId")
    User saveUser(User user);

    ExistingUser loginUser(AuthenticationInfo authenticationInfo);

    @CacheEvict(value = "users", key = "#userId")
    void deleteUser(String userId);

    @CachePut(value = "users", key = "#user.userId")
    User updateUser(User user);
}
