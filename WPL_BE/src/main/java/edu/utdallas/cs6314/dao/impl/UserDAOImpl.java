package edu.utdallas.cs6314.dao.impl;

import java.util.List;

import edu.utdallas.cs6314.dao.UserDAO;
import edu.utdallas.cs6314.domain.model.User;
import edu.utdallas.cs6314.domain.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImpl implements UserDAO {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUser(Long userId) {
        return userRepository.findOne(userId);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        userRepository.delete(userId);
    }

//    public User logInUser(String username, String password) {
//        // returning user
//    }
}
