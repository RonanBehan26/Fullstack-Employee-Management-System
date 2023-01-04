package com.ronanDec.Employee.entity;

import jakarta.persistence.*;
import lombok.Data;

//The entities are the persistence objects stores as a record in the database.
@Entity //works with JPA to save the data in the DB
@Data //getters and setters, and all methods added from Lombok
@Table(name = "employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //just generates automatically
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
