package edu.utdallas.cs6314.service.Impl;

import java.util.List;

import edu.utdallas.cs6314.dao.UserDAO;
import edu.utdallas.cs6314.domain.model.AuthenticationInfo;
import edu.utdallas.cs6314.domain.model.ExistingUser;
import edu.utdallas.cs6314.domain.model.User;
import edu.utdallas.cs6314.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDAO userDAO;

    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    public User getUser(String userId) {
        return userDAO.getUser(userId);
    }

    public User saveUser(User user) {
        return userDAO.saveUser(user);
    }

    public ExistingUser loginUser(AuthenticationInfo authenticationInfo) {
        return userDAO.getUser(authenticationInfo);
    }

    public void deleteUser(String userId) {
        userDAO.deleteUser(userId);
    }
}
