package edu.utdallas.cs6314.rest.controller;

import java.util.List;

import javax.validation.Valid;

import edu.utdallas.cs6314.domain.model.AuthenticationInfo;
import edu.utdallas.cs6314.domain.model.Bid;
import edu.utdallas.cs6314.service.BidService;

import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    BidService bidService;

    @RequestMapping(value = "", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Bid>> getAllBids() {
        List<Bid> bids = bidService.getAllBids();
        return new ResponseEntity<>(bids, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Bid> placeBid(@RequestBody @Valid Bid bid) {
        return new ResponseEntity<>(bidService.placeBid(bid), HttpStatus.OK);
    }

    @RequestMapping(value = "/{bidId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Bid> getBid(@PathVariable String bidId) {
        Bid bid = bidService.getBid(bidId);
        return new ResponseEntity<>(bid, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/{userId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Bid>> getBidsByUser(@PathVariable String userId) {
        List<Bid> bids = bidService.getBidsByUserId(userId);
        return new ResponseEntity<>(bids, HttpStatus.OK);
    }

    @RequestMapping(value = "/product/{productId}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Bid>> getBidsByProduct(@PathVariable String productId) {
        List<Bid> bids = bidService.getBidsByProductId(productId);
        return new ResponseEntity<>(bids, HttpStatus.OK);
    }

    @RequestMapping(value = "/{bidId}", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Bid> acceptBid(@PathVariable String bidId,
            @RequestBody @Valid AuthenticationInfo authenticationInfo) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
