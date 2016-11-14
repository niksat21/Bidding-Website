package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.User;

public interface UserService {

    List<User> getAllUsers();

    User getUser(Long userId);

    User saveUser(User user);

    void deleteUser(Long userId);
}
