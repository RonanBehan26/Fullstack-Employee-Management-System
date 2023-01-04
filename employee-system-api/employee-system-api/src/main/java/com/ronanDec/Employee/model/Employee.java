package com.ronanDec.Employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//The Model represents formal underlying data constructs
// that the View uses to present the user with the look and feel of the application.
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
