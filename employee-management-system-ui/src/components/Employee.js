import React from 'react'
import { useNavigate } from 'react-router-dom';

//need to define the prop from the parent class and that will give you access to it

const Employee = ({employee, deleteEmployee}) => {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        //navigate(/editEmployee/${id})
        navigate(`/editEmployee/${id}`) //the quotes here are different and it works
    };


  return (
    <tr key={employee.id
        //<tr key={employee.id}> - each child in a list should have a uniqe "key prop"
        //later we go from child to parent with deleteEmployee(), define method in parent, then pass as prop to child, update state
        }>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.firstName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.lastName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.emailId}</div>
            </td>
            <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                <a 
                    onClick={(e, id) => editEmployee(e, employee.id)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    Edit
                </a>
                <a 
                    onClick={(e, id) => deleteEmployee(e, employee.id)}
                    className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>
                    Delete
                </a>
            </td>
        </tr>
  );
};

export default Employee