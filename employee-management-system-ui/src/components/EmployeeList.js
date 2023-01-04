import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

    //use hook to route to right page
    //The useNavigate hook returns a function that lets you navigate programmatically with react-router-dom
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);//loading to define or change data until we get data, once loaded we display
    const [employees, setEmployees] = useState(null); //get employees from db

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await EmployeeService.getEmployees();//call api, getting the list, await means wait
                setEmployees(response.data) //setting array/state here
            }catch(error){
                console.log(error);
            }
            setLoading(false)
        };
        fetchData();//just calling method above
    }, []);

    const deleteEmployee = (e, id) => {//click delete sends ID
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) => {//delete from db, need to get get response back
            if(employees){//then check if employees are there and check state, set state again
                setEmployees((prevElement) => { //take preveious eleements and filter out the one you want to delete
                    return prevElement.filter((employee) => employee.id !== id);//remove ifd from list
                })
            }
        })
    }
    

  return (
    <div className='container mx-auto my-8'>
        <div className="h2-12">
            <button 
            onClick={() => navigate("/addEmployee")}
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                Add Employee
            </button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-grey-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email ID</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                
                {!loading && ( //loading should be complete to show this
                <tbody className='bg-white'>
                    {employees.map((employee) => ( 
                        <Employee 
                        employee={employee}
                        deleteEmployee={deleteEmployee} 
                        key={employee.id}></Employee> //pass the employee to child class with props
                        //inside Employee component
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default EmployeeList