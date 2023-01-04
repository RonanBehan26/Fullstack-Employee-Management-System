package com.ronanDec.Employee.repository;

//will interact with the DB to save the data

import com.ronanDec.Employee.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//JpaRepository of type EmployeeEntity, with ID of long
@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
