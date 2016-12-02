package edu.utdallas.cs6314.rest.controller;

import javax.validation.Valid;

import edu.utdallas.cs6314.domain.model.AuthenticationInfo;
import edu.utdallas.cs6314.domain.model.ExistingUser;
import edu.utdallas.cs6314.domain.model.User;
import edu.utdallas.cs6314.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller used for authentication methods (logging in, logging out, SSO)
 */
@CrossOrigin
@RestController
@RequestMapping({"/api/auth"})
public class AuthenticationController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ExistingUser> login(
            @RequestBody @Valid AuthenticationInfo authenticationInfo) {
        ExistingUser existingUser = userService.loginUser(authenticationInfo);
        if (existingUser == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(existingUser, HttpStatus.OK);
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> logout() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
