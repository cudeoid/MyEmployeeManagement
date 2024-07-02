package com.example.springrest.service;

import com.example.springrest.dao.EmployeeDao;
import com.example.springrest.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeDao employeeDao;
//    List<Employee> list;
    public EmployeeServiceImpl(){
//        list = new ArrayList<>();
//        list.add(new Employee(1,"Harikesh","yadav","harikesh@gmail.com"));
//        list.add(new Employee(2,"Amit","kumar","amit@gmail.com"));
    }
    @Override
    public List<Employee> getEmployees() {
        return employeeDao.findAll();
    }

    @Override
    public Optional<Employee> getEmployee(long id) {
//        Employee e = null;
//        for(Employee employee: list)
//        {
//            if(employee.getId()==id)
//            {
//                e = employee;
//                break;
//            }
//        }
        return employeeDao.findById(id);
    }

    @Override
    public Employee addEmployee(Employee employee) {
 //       list.add(employee);
        employeeDao.save(employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Employee employee) {

//        list.forEach(e->{
//           if(e.getId()==employee.getId()){
//               e.setFirstName(employee.getFirstName());
//               e.setLastName(employee.getLastName());
//               e.setEmailId(employee.getEmailId());
//           }
//        });
        employeeDao.save(employee);
        return employee;
    }

    @Override
    public void deleteEmployee(long parseLong) {
       // list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
        Employee entity = employeeDao.getOne(parseLong);
        employeeDao.delete(entity);
    }
}
