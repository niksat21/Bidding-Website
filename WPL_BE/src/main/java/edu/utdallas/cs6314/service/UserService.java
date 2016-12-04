package edu.utdallas.cs6314.service;

import java.util.List;

import edu.utdallas.cs6314.domain.model.AuthenticationInfo;
import edu.utdallas.cs6314.domain.model.ExistingUser;
import edu.utdallas.cs6314.domain.model.User;

public interface UserService {

    List<User> getAllUsers();

    User getUser(String userId);

    User saveUser(User user);

    ExistingUser loginUser(AuthenticationInfo authenticationInfo);

    void deleteUser(String userId);

    User updateUser(User user);
}
