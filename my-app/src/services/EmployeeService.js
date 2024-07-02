import axios from 'axios';

const EMPLOYEE_BASE_REST_REST_API_URL = 'http://localhost:8080/employees';

class EmployeeService {
  getAllEmployees(page = 1, pageSize = 10) {
    return axios.get(`${EMPLOYEE_BASE_REST_REST_API_URL}?page=${page}&pageSize=${pageSize}`);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_REST_REST_API_URL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_BASE_REST_REST_API_URL}/${employeeId}`);
  }

  updateEmployee( employee) {
    return axios.put(`${EMPLOYEE_BASE_REST_REST_API_URL}`, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(`${EMPLOYEE_BASE_REST_REST_API_URL}/${employeeId}`);
  }
}

export default new EmployeeService();
