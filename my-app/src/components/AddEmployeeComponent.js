import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link, useParams, useNavigate } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const {id} = useParams();
  const navigate = useNavigate();

  const saveOrUpdateEmployee = (e) =>{
    e.preventDefault();
    const employee = { firstName, lastName, emailId}
    console.log(employee)
    if(id){
      employee.id=id;
      // If the component has an "id" parameter, update the employee
      EmployeeService.updateEmployee(employee)
        .then((response) => {
          console.log(response.data);
          // Navigate to the /employees route after updating
          navigate("/employees");
        })
        .catch((error) => {
          console.error(error);
        });
    }else{
        EmployeeService.createEmployee(employee).then((response) =>{
            console.log(response.data);
        }).catch(error => {
            console.log(error.response.data);
        })
    }
  }

  useEffect(() => {
    if (id) {
      // If the component has an "id" parameter, fetch the employee data for update
      EmployeeService.getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmailId(response.data.emailId);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Otherwise, the component is in "Add Employee" mode, reset the form fields
      setFirstName("");
      setLastName("");
      setEmailId("");
    }
  }, [id]);
  

  const title = () =>{
    if(id){
        return <h2 className="text-centre">Update Employee</h2>
    }else{
        return <h2 className="text-centre">Add Employee</h2>
    }
  }
  return (
    <div>
        <br/>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
                title()
            }
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-sucess" onClick = {(e) => { 
                    e.preventDefault();
                     saveOrUpdateEmployee(e);
                    window.location.href="/employees";
                } }>Submit</button>
                <Link to ='/employees' className='btn btn-danger' >Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
