package edu.utdallas.cs6314.service.Impl;

import java.util.List;
import java.util.Properties;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import edu.utdallas.cs6314.dao.OrderDAO;
import edu.utdallas.cs6314.dao.ProductDAO;
import edu.utdallas.cs6314.dao.UserDAO;
import edu.utdallas.cs6314.domain.model.Order;
import edu.utdallas.cs6314.domain.model.User;
import edu.utdallas.cs6314.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderDAO orderDAO;

    @Autowired
    UserDAO userDAO;

    @Autowired
    ProductDAO productDAO;

    @Value("${spring.mail.username}")
    private String mailUsername;

    @Value("${spring.mail.password}")
    private String mailPassword;

    @Value("${spring.mail.properties.mail.smtp.auth}")
    private boolean mailSmtpAuth;

    @Value("${spring.mail.properties.mail.smtp.ssl.enable}")
    private boolean sslEnable;

    @Value("${spring.mail.host}")
    private String mailHost;

    public List<Order> getAllOrders() {
        return orderDAO.getAllOrders();
    }

    public Order getOrder(String orderId) {
        return orderDAO.getOrder(orderId);
    }

    public Order getOrderByProductId(String productId) {
        return orderDAO.getOrderByProductId(productId);
    }

    public Order getOrderByBidId(String bidId) {
        return orderDAO.getOrderByWinningBidId(bidId);
    }

    public List<Order> getOrdersByBuyerId(String buyerId) {
        return orderDAO.getOrdersByBuyerId(buyerId);
    }

    public List<Order> getOrdersBySellerId(String sellerId) {
        return orderDAO.getOrdersBySellerId(sellerId);
    }

    public Order placeOrder(Order order) {
        try {
            sendEmail(userDAO.getUser(order.getBuyerId()).getEmail(), "Purchase Confirmed!",
                    "You have bought " + order.getQuantity() + "x "
                            + productDAO.getProduct(order.getProductId()).getProductName()
                            + (order.getOrderDate() == null ? "."
                                    : " on " + order.getOrderDate().toString() + "."));
        } catch (Exception e) {
            System.out.println("Buyer email not sent");
        }

        try {
            sendEmail(userDAO.getUser(order.getSellerId()).getEmail(), "Your Item Was Purchased!",
                    "You have sold " + order.getQuantity() + "x "
                            + productDAO.getProduct(order.getProductId()).getProductName()
                            + (order.getOrderDate() == null ? "."
                                    : " on " + order.getOrderDate().toString() + "."));
        } catch (Exception e) {
            System.out.println("Sender email not sent");
        }
        return orderDAO.placeOrder(order);
    }

    private void sendEmail(String email, String subject, String text) {
        Properties props = new Properties();
        props.put("mail.smtp.host", mailHost);
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");

        Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(mailUsername, mailPassword);
            }
        });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(mailUsername));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
            message.setSubject(subject);
            message.setText(text);

            Transport.send(message);

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
