import logo from './logo.svg';
import './App.css';

//data handling 

function App() {
  let sid=101;
  let sname = "Scott";
  let course="react";
  let age = 25;
  let total=400;

  // Array of Objects

   let doctArray = [
    { doctorid: 10, doctorName: "eric", designation: "HOD" ,experience:4,contactNumber:9198783687},
    { doctorid: 20, doctorName: "Scott", designation: "intern" ,experience:5,contactNumber:9198654687},
    { doctorid: 30, doctorName: "Mark", designation: "MD" ,experience:6,contactNumber:9197383687},
    { doctorid: 40, doctorName: "tom", designation: "Surgeon" ,experience:3,contactNumber:8758783687},
  ];

  let resultarray=doctArray.map(item=>
  {
    return <tr>
            <td>{item.doctorid}</td>
            <td>{item.doctorName}</td>
            <td>{item.designation}</td>
            <td>{item.experience}</td>
            <td>{item.contactNumber}</td>
          </tr>;
  });

  return(
    <>
    <hr/>Ques 1 : Single student data<hr/><br/>
        <table border="2"  width="200">
          <tr style={{textAlign: "center"}}>
            <b>Student details</b>
            
          </tr>
          <tr>
            <td>Student id</td>
            <td>{sid}</td>
          </tr>
          <tr>
            <td>Student name</td>
            <td>{sname}</td>
          </tr>
          <tr>
            <td>Student course</td>
            <td>{course}</td>
          </tr>
          <tr>
            <td>Student age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>Student total</td>
            <td>{total}</td>
          </tr>
        </table>

        <hr/>Ques 2. Array of Objects<hr/><br/>
        <table width="350" border="2">
          <tr>
            <th>DoctorId</th>
            <th>doctorname</th>
            <th>doctor designation</th>
            <th>doctor experience</th>
            <th>contact number</th>
          </tr>
          {resultarray}
        </table>
	<hr/> Ques 4. Display Image <hr/><br/>
        <img src={'./logo512.png'} height={300} width={300}/>
    </>
  );
}
export default App;
