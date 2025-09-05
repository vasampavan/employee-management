import React from 'react'

export default function ListEmployee() {
  const dummyData=[
    {
        "id":1,
        "firstName":"Pavan",
        "lastName":"Vasam",
        "email":"pavan@gmail.com"
    },
     {
        "id":2,
        "firstName":"prakash",
        "lastName":"Vasam",
        "email":"prakas@gmail.com"
    },
     {
        "id":3,
        "firstName":"sharanya",
        "lastName":"Vasam",
        "email":"saranya@gmail.com"
    }
  ]
    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData.map(employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    
  )
}
