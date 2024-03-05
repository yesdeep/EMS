import React, {useState, useEffect} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => { 
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate(); 

    useEffect(() => {
        getAllEmployees();
    },[])

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data)
          }).catch(error =>{
            console.log(error);
          })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
    <div className='container'>
        <h2>List of Employees</h2>
        <button className='btn btn-secondary mb-2' onClick={addNewEmployee} >Add Employee</button>
        <table className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                style = {{marginLeft:'10px'}}
                                >Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent