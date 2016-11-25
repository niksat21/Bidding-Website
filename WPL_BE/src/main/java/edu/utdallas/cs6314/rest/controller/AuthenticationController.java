package edu.utdallas.cs6314.rest.controller;

import javax.validation.Valid;

import edu.utdallas.cs6314.domain.model.AuthenticationInfo;
import edu.utdallas.cs6314.domain.model.User;

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

    @RequestMapping(value = "/login", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> login(@RequestBody @Valid AuthenticationInfo authenticationInfo) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> logout() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
