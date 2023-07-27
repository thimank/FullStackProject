import React, { useEffect, useState } from 'react';
import { getAllEmployee } from '../services/EmployeeService';

function Employee() {

    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        getAllEmployee().then(res => setEmployees(res.data));
    }, []);

    return (
        <div className='tabl'>
            <table className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th scope="col">EmpId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">DOJ</th>
                    </tr>
                </thead>
                <tbody>
                    { employees.map((user)=>
                    <tr key = {user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.company}</td>
                        <td>{user.doj}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Employee;