import axios from "axios";
export let dataServiceempsObj={
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    deleteEmployee,
    updateEmployee
};
let url="http://localhost:3600/emps/";

function getAllEmployees(){
    return axios.get(url);
}
function getEmployeeById(eno){
    return axios.get(url + eno);
}
function addEmployee(empObj){
    return axios.post(url,empObj);
}
function deleteEmployee(eno){
    return axios.delete(url+eno);
}
function updateEmployee(empObj,eno){
    return axios.put(url+eno,empObj)
}