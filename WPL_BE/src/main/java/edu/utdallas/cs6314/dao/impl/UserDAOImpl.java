package edu.utdallas.cs6314.dao.impl;

import java.util.GregorianCalendar;
import java.util.List;

import edu.utdallas.cs6314.dao.UserDAO;
import edu.utdallas.cs6314.domain.model.AuthenticationInfo;
import edu.utdallas.cs6314.domain.model.ExistingUser;
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

    public User getUser(String userId) {
        return userRepository.findOne(userId);
    }

    public ExistingUser getUser(AuthenticationInfo authenticationInfo) {
        ExistingUser existingUser = new ExistingUser();

        User user = userRepository.findUserByUserName(authenticationInfo.getUsername());
        if (user != null && user.getPassword().equals(authenticationInfo.getPassword())) {

            user.setLastLogIn(new GregorianCalendar());
            user.setLastLoginLocation(authenticationInfo.getLoginLocation());
            userRepository.save(user);

            existingUser.setUserId(user.getUserId());
            existingUser.setCreatedDate(user.getCreatedDate());
            existingUser.setLastLoginLocation(user.getLastLoginLocation());
            existingUser.setLastLogIn(user.getLastLogIn());
            existingUser.setEmail(user.getEmail());
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setUserName(user.getUserName());
            return existingUser;
        } else {
            return null;
        }
    }

    public User saveUser(User user) {
        User oldUser = userRepository.findUserByUserName(user.getUserName());
        if (oldUser == null) {
            user.setCreatedDate(new GregorianCalendar());
            return userRepository.save(user);
        }
        return null;
    }

    public void deleteUser(String userId) {
        userRepository.delete(userId);
    }

    //    public User logInUser(String username, String password) {
    //        // returning user
    //    }
}
