import { Navbar } from 'reactstrap';
import '../styles/Dashboard.css'
import Employee from './Employee';
import React from 'react';
import EmpForm from './EmpForm';

function Dashboard() {
    return (
        <div className='back'>
            <nav className="navb navbar navbar-dark bg-dark">
               <img style={{ marginLeft : '5px'}} width="40" height="40" src='../../favicon.ico'/>
               MY DATABASE
               <img style={{justifySelf:'right' }} width="40" height="40" src='../../favicon.ico'/>
            </nav>
            
            <div className='emp'>
                <Employee />
            </div>
            <div className='empform'>
                <EmpForm/>
            </div>
        </div>
    );
}

export default Dashboard;