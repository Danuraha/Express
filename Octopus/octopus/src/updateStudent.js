import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
const  UpdateStudent= () => {
    const [name,setName]=useState('')
const [email,setEmail]=useState('')
const {id}=useParams();
// const Navigate=useNavigate();

function handleSubmit(event) {
    event.preventDefault();
    axios.put('http://localhost:8081/update/'+id,{name,email})
    .then(res=>{
        console.log(res);
        // Navigate('/');

    }).catch(err=>console.log(err));
}

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <h2>UpdateStudent Student</h2>
                <div>
                    <label>Name</label>
                    <Input type="text" placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
                    
                </div>

                <div>
                    <label>Email</label>
                    <Input type="email" placeholder="Enter Email" onChange={e=>setEmail(e.target.value)} />
                    
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
 
export default UpdateStudent ;