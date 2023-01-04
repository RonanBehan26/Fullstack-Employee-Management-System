package com.ronanDec.Employee.services;

import com.ronanDec.Employee.entity.EmployeeEntity;
import com.ronanDec.Employee.model.Employee;
import com.ronanDec.Employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository; //object of repo, plus constructor below

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    //need to convert to employee entity to save to the db
    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        //copy values from employee and pass to employeeEntity
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity); //save is there as we extended the JPARepository

        return employee;
    }

    //getting the employeeEntities, and converting it into type Employee using the map function
    //stream thorugh the employeeEntities and then convert using , then collect
    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        List<Employee> employees = employeeEntities.stream().map(emp -> new Employee(
                emp.getId(), emp.getFirstName(), emp.getLastName(), emp.getEmailId()
        )).collect(Collectors.toList());

        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }
    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setEmailId(employee.getEmailId());
        employeeRepository.save(employeeEntity);
        return employee;
    }

}
