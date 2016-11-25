package edu.utdallas.cs6314.rest.controller;

import javax.validation.Valid;

import edu.utdallas.cs6314.domain.model.AuthenticationInfo;
import edu.utdallas.cs6314.domain.model.Bid;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller for seeing bids for a specific user or product.
 */
@CrossOrigin
@RestController
@RequestMapping({"/api/bids"})
public class BidController {

    @RequestMapping(value = "/{bidId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Bid> getBid(@PathVariable Long bidId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/user/{userId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Bid> getBidsByUser(@PathVariable Long userId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/product/{productId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Bid> getBidsByProduct(@PathVariable Long productId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/{bidId}", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Bid> acceptBid(@PathVariable Long bidId,
            @RequestBody @Valid AuthenticationInfo authenticationInfo) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
