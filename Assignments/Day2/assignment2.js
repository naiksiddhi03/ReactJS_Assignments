import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
function Day2Ass2() {

    const [empsArray, setEmpsArray] = useState([]);
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");



    function getData() {
        let emplist = [
            { empno: 101, ename: "Patey Speedway", job: "java developer", sal: 50000, deptno: 1 },
            { empno: 102, ename: "Scott Cruiser", job: "UI/UX designer", sal: 45000, deptno: 1 },
            { empno: 103, ename: "Mark Forcewind", job: "ML learning ", sal: 55000, deptno: 1 },
            { empno: 104, ename: "tom Sthesia", job: "front developer", sal: 50000, deptno: 1 }
        ];
        setEmpsArray(emplist);
    }
    function addData(){
        let empObj = { };
        empObj.empno = empno; //lhs is property of deptobj and rhs is state variable
        empObj.ename = ename; 
        empObj.job = job; 
        empObj.sal=sal;
        empObj.deptno=deptno;
        

        let tempArray = [...empsArray];    //clonning array 
        tempArray.push(empObj);            //adding new entries to temparray 
        setEmpsArray( tempArray );
        clearFields();
    }
    function  clearFields() //to make input fields empty again
    {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }
    function updateData(){
        let tempArray=[...empsArray];
        let index=tempArray.findIndex(item=> item.empno==empno);
        tempArray[index].ename=ename;
        tempArray[index].job=job;
        tempArray[index].sal=sal;
        tempArray[index].deptno=deptno;
        setEmpsArray( tempArray );
        clearFields();
    }

    function selectClick(eno){
        let empObj =   empsArray.find(item =>  item.empno ==  eno);
      setEmpno(empObj.empno);
      setEname(empObj.ename);
      setJob(empObj.job);
      setSal(empObj.sal);
      setDeptno(empObj.deptno);
    }
    function deleteData(eno){
        let tempArray = [...empsArray];
        
        let  index = tempArray.findIndex( item => item.empno == eno ); //on clicking on delete it will map dno to specific deptno index
        tempArray.splice(index, 1);     //deleting that index entry

        setEmpsArray( tempArray );
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
                {/* <a href="javascript:void(0);" onClick={() => {selectClick(item.empno)}}>Select</a>| */}
                <button onClick={() => {deleteData(item.empno)}} type="submit"><FontAwesomeIcon icon={faTrash} /></button>
                {/* <a href="javascript:void(0);" onClick={() => {deleteData(item.empno)}}>Delete</a> */}
            </td>
        </tr>;
    });
    return (
        <>
            <h1>perfom crud operation on array of objects</h1>
            <hr /><br />
            <input placeholder="empno" type="text" value={empno} onChange={(e) => setEmpno(e.target.value)} />
            <input placeholder="empname" type="text" value={ename} onChange={(e) => setEname(e.target.value)} />
            <input placeholder="empjob" type="text" value={job} onChange={(e) => setJob(e.target.value)} />
            <input placeholder="salary" type="text" value={sal} onChange={(e) => setSal(e.target.value)} />
            <input placeholder="deptno" type="text" value={deptno} onChange={(e) => setDeptno(e.target.value)} /><br /><br />
            <input type="button" value="get Emps" onClick={getData} />
            <input type="button" value="Add Emp" onClick={addData}/>
            <input type="button" value="Update Emp data" onClick={updateData}/>
            

            <hr /><br />
            <table border="2" width="700px">
                <tr>
                    <th>emp no</th>
                    <th>employee name</th>
                    <th>employee job</th>
                    <th>salary</th>
                    <th>deptno</th>
                    <th>Actions</th>
                </tr>
                {resultArray }
            </table>
           
        </>
    );
}
export default Day2Ass2;