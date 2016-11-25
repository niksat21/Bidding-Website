package edu.utdallas.cs6314.dao;

import java.util.List;

import edu.utdallas.cs6314.domain.model.User;

public interface UserDAO {
    List<User> getAllUsers();

    User getUser(String userId);

    User saveUser(User user);

    void deleteUser(String userId);
}
