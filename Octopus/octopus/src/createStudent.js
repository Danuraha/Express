import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
const  CreateStudent= () => {
    const [name,setName]=useState('')
const [email,setEmail]=useState('')
// const Navigate=useNavigate();

function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/create',{name,email})
    .then(res=>{
        console.log(res);
        // Navigate('/');

    }).catch(err=>console.log(err));
}

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div>
                    <label>Name</label>
                    <Input type="text" placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
                    
                </div>

                <div>
                    <label>Email</label>
                    <Input type="email" placeholder="Enter Email" onChange={e=>setEmail(e.target.value)} />
                    
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
 
export default CreateStudent ;