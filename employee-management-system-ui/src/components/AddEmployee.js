import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

  //we have the values, setting them in the curly brackets, then they are to be transferred to setEmployee
  //after this set below in the inputs, same for state, same for input values
  //employee is the state, setEmployee is the method to set the state
  //event on change - onchange calls the method handleChange and this changes the state
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: ""
  });

  const handleChange = (e) => {
    const value = e.target.value; //value I'm getting, set value to state
    setEmployee({...employee, [e.target.name]: value});//here name is whatever the value in employee is, set that to value
    //...employee is the existing values, next part to update
    //when there is input it wil change the state, .name = name in the input
    //e.target is the particular
  }

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault(); //disable refressing of the page
    //now call api, employee here is the state
    EmployeeService.saveEmployee(employee).then((response) => {
      console.log(response);
      navigate("/employeeList")
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: ""
    });
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-grey-600 text-sm font-normal">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={employee.firstName}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2">
              </input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-grey-600 text-sm font-normal">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2">
              </input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-grey-600 text-sm font-normal">
                Email
              </label>
              <input
                type="email"
                name="emailId"
                value={employee.emailId}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2">
              </input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
              <button onClick={saveEmployee} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                Save</button>
              <button onClick={reset} className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                Clear</button>
            </div>

        </div>
    </div>
  )
}

export default AddEmployee