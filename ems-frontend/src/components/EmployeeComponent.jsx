import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const EmployeeComponent = () => {
   const [firstName,setFirstName]=useState('')
   const [lastName,setLastName]=useState('')
   const [email,setEmail]=useState('')
   const navigator=useNavigate();
   function handleFirstName(e){
    setFirstName(e.target.value);

   }
   function handleLastName(e){
    setLastName(e.target.value);

   }
   function handleEmail(e){
    setEmail(e.target.value);

   }
   function saveEmployee(e){
    e.preventDefault();
    const employee={firstName,lastName,email}
    console.log(employee)
    createEmployee(employee).then((response)=>{
        console.log(response.data);
        navigator('/employees')
    })
   }
  return (
    <div className='container'>
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add employee</h2>
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input type="text" placeholder='Enter Employee First Name' name='FirstName' value={firstName} className='form-control' onChange={handleFirstName}/>

                        </div>
                         <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input type="text" placeholder='Enter Employee Last Name' name='LastName' value={lastName} className='form-control' onChange={handleLastName}/>

                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input type="text" placeholder='Enter Employee Email' name='Email' value={email} className='form-control' onChange={handleEmail}/>

                        </div>
                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent