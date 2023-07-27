import axios from "axios"

export const addEmployee = (employee) => {
   return axios.post('http://localhost:8082/EmployeeDatabase/addEmployee',employee);
 }
export const editEmployee = (employee) => {
    return axios.put('http://localhost:8082/EmployeeDatabase/editEmployee',employee);
 }
 export const deleteEmployeeById = (id) => {
    return axios.delete('http://localhost:8082/EmployeeDatabase/deleteEmployee/'+id);
 }
 export const deleteEmployee = (employee) => {
    return axios.delete('http://localhost:8082/EmployeeDatabase/deleteEmployee/',employee);
 }
 export const getEmployee = (id) => {
    return axios.get('http://localhost:8082/EmployeeDatabase/Employee/'+id);
 }
 export const getAllEmployee = () => {
    return axios.get('http://localhost:8082/EmployeeDatabase/Employee');
 }