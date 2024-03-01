import { useState } from "react";
import { dataServiceempsObj } from "../Services/dataService_emps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

function Day3Ass1_empserver(){
    const [empsArray,setEmpsArray]=useState([])
    const [empno,setEmpno]=useState("");
    const [ename,setEname]=useState("");
    const [job,setJob]=useState("");
    const [sal,setSal]=useState("");
    const [deptno,setDeptno]=useState("");
    
    function getAllEmpClick(){
        dataServiceempsObj.getAllEmployees().then(resData=>{
            setEmpsArray(resData.data);
        });
    }

    function addEmpClick(){
        let empObj={ };
        empObj.empno=empno;
        empObj.ename=ename;
        empObj.job=job;
        empObj.sal=sal;
        empObj.deptno=deptno

        dataServiceempsObj.addEmployee(empObj).then(resData=>{
            getAllEmpClick();
            clearFields();
        });

    }
    function clearFields(){
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");

    }
    function updateempClick(){
        let empObj={ };
        empObj.empno=empno;
        empObj.ename=ename;
        empObj.job=job;
        empObj.sal=sal;
        empObj.deptno=deptno

        dataServiceempsObj.updateEmployee(empObj,empno).then(resData=>{
            alert(" Employee record Updated in server");
            getAllEmpClick();
            clearFields();
        });
    }

    function selectClick(eno){

        dataServiceempsObj.getEmployeeById(eno).then(resData=>
            {
            let empObj=resData.data;
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno);
        });
    }
    function  deleteClick(eno)
    {
       dataServiceempsObj.deleteEmployee(eno).then(resData => 
        {
            alert("employee record deleted from server");
            getAllEmpClick();            
        });
    }

    let resultArray = empsArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td align="center">
            <button type="submit" onClick={() => {selectClick(item.empno)}}><FontAwesomeIcon icon={faHandPointer}/></button>|
                
                <button onClick={() => {deleteClick(item.empno)}} type="submit"><FontAwesomeIcon icon={faTrash} /></button>
               
            </td>
        </tr>;
    });
    return(
        <>
        <h3>Perform CRUD Operations on Array of Objects using json server</h3>
            <hr />
            <input placeholder="Emp no" type="number"
                value={empno} onChange={(e) => setEmpno(e.target.value)} />

            <input placeholder="Emp name" type="text"
                value={ename} onChange={(e) => setEname(e.target.value)} />

            <input placeholder="job" type="text"
                value={job} onChange={(e) => setJob(e.target.value)} />
            <input placeholder="salary" type="text"
                value={sal} onChange={(e) => setSal(e.target.value)} />
            <input placeholder="dept no" type="number"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />
            <hr />

            <input type="button" value="Get Emps" onClick={getAllEmpClick} />
            <input type="button" value="Add Emp" onClick={addEmpClick} />
            <input type="button" value="Update Emp" onClick={updateempClick} />

            <hr />
        <table border="2" width="700">
            <tr>
                <th>Employee ID</th>
                <th>Employee name</th>
                <th>Employee job</th>
                <th>Employee salary</th>
                <th>department</th>
                <th>Actions</th>
            </tr>
            {resultArray}
        </table>
        </>
    );
}
export default Day3Ass1_empserver;