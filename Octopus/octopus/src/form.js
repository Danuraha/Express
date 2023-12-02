import { Grid, TextField } from "@mui/material";
import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Form = () => {

    const [student,setStudent]=useState([])
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");
    // const [school,setSchool]=useState("");

     useEffect(() => {
    axios.get('http://localhost:8081/')
      .then((res) => setStudent(res.data)) // Assuming that the response has a 'data' property
      .catch((err) => console.error(err));
  }, []);

    console.log(student);
    return ( 
        <div>
           
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    student.map((data,i)=>(
                        <tr key={i}>
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                            <td>
                                <button>Update</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )) 
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default Form;