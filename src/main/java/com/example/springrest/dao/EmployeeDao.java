package com.example.springrest.dao;

import com.example.springrest.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeDao extends JpaRepository<Employee,Long>{

}
