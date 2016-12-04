package edu.utdallas.cs6314.domain.model;

import java.util.GregorianCalendar;

import org.springframework.data.annotation.Id;

public class User implements java.io.Serializable {
    @Id
    String userId;
    String userName;
    String firstName;
    String lastName;
    String email;
    String password;
    GregorianCalendar createdDate;
    GregorianCalendar lastLogIn;
    String lastLoginLocation;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public GregorianCalendar getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(GregorianCalendar createdDate) {
        this.createdDate = createdDate;
    }

    public GregorianCalendar getLastLogIn() {
        return lastLogIn;
    }

    public void setLastLogIn(GregorianCalendar lastLogIn) {
        this.lastLogIn = lastLogIn;
    }

    public String getLastLoginLocation() {
        return lastLoginLocation;
    }

    public void setLastLoginLocation(String lastLoginLocation) {
        this.lastLoginLocation = lastLoginLocation;
    }
}
