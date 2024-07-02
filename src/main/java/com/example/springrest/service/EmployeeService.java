package com.example.springrest.service;

import com.example.springrest.entities.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    public List<Employee> getEmployees();
    public Optional<Employee> getEmployee(long id);
    public Employee addEmployee(Employee employee);
    public Employee updateEmployee(Employee employee);
    public void deleteEmployee(long parseLong);
}
