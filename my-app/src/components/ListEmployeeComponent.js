import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of employees to show per page (you can adjust this)

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = (page = 1) => {
    EmployeeService.getAllEmployees(page).then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then(() => {
      getAllEmployees(currentPage); // Reload the current page after deletion
    }).catch(error => {
      console.log(error);
    });
  };

  const handlePageChange = (page) => {
    getAllEmployees(page);
    setCurrentPage(page);
  };

  // Calculate the total number of pages based on the total number of employees
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.slice(startIndex, endIndex).map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)} style={{ marginLeft: "10px" }}>Delete</button>
                <button className="btn btn-primary" style={{ marginLeft: "10px"}}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination component */}
      <Pagination>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink previous onClick={() => handlePageChange(currentPage - 1)} />
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index} active={index + 1 === currentPage}>
            <PaginationLink onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink next onClick={() => handlePageChange(currentPage + 1)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default ListEmployeeComponent;
