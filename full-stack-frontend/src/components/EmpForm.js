import React, { useEffect, useState } from "react";
import '../styles/EmpForm.css'
import { useForm } from 'react-hook-form';
import { addEmployee } from "../services/EmployeeService";
function EmpForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [gridCheck, setGridCheck] = useState(false);

    const sendData = (data) => {
        addEmployee(data);
        console.log(data);
        window.location.reload(true);
    }

    return (
        <form onSubmit={handleSubmit((data) =>{
            sendData(data);
        })} >
            <div className="col-md-5 formGrp">
                <label htmlFor="empId">Employee Id</label>
                <input type="text" {...register("id", { required: "Emp Id is Required" })} className="form-control" id="empId" placeholder="Enter Emp Id" />
                <p className="alert-danger">{errors.id && errors.id.message}</p>
            </div>

            <div className="col-md-5 formGrp">
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name")} className="inpt form-control" id="name" placeholder="Enter Name" />
                <p className="alert-danger">{errors.id && errors.id.message}</p>
            </div>

            <div className="col-md-5 formGrp">
                <label htmlFor="company">Company Name</label>
                <input type="text" {...register("company")} className="inpt form-control" id="company" placeholder="Enter Company" />
                <p className="alert-danger">{errors.id && errors.id.message}</p>
            </div>

            <div className="col-md-5 formGrp">
                <label htmlFor="doj">Date Of Joining</label>
                <input type="text" {...register("doj")} className="inpt form-control" id="doj" placeholder="Enter DOJ" />
                <p className="alert-danger">{errors.id && errors.id.message}</p>
            </div>

            <div className="col-md-5 formGrp">
                <input className="form-check-input" type="checkbox" id="gridCheck" onChange={(event) => setGridCheck(event.target.checked) } />
                <label className="inpt form-check-label" htmlFor="gridCheck" id="gridCheck" >Accept Terms & Conditions*</label>
            </div>

            <div className="btn">
                <button type="submit" id="btn" disabled={!gridCheck} className="btn btn-primary">Sign in</button>
            </div>
            
        </form>
    );
}

export default EmpForm;