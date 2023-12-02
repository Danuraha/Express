const express = require('express');
const cors=require("cors");
const mysql =require("mysql2");


const app=express();

app.use(express.json());


app.use(cors());

const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"Danuraha@9",
database:"crud",

})

app.get("/",(req,res)=>{
    const sql="SELECT * FROM student";
    db.query(sql,(err,data)=>{
        console.log(err);
        if(err) return res.json("Error");
        return res.json(data);
    })
   

})

// app.post('/create',(req,res)=>{
//     const sql='INSERT INTO student(Name,Email) VALUES(?)';
//     const VALUES =[
//         req.body.name,
//         req.body.email
//     ]
//        db.query(sql,[VALUES],(err,res)=>{
//         if(err) return res.json("Error");
//         return res.json(data);
//        })
    
// })
app.post('/create', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO student (Name, Email) VALUES (?, ?)';
    const values = [name, email];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      // Assuming your INSERT query returns the ID of the newly inserted row
      const insertedId = result.insertId;
      console.log(`Inserted row with ID: ${insertedId}`);
  
      res.json({ success: true, insertedId });
    });
  });
  





  app.put('/update/:id', (req, res) => {
    const sql = "update student set 'Name'=? ,'Email' =? where ID=?";
    const values = [
        req.body.name,
        req.body.email
    ]
  
    const id=req.params.id;
    db.query(sql, [...values,id], (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        return res.json(data);
      }
    });
  });
 



app.listen(8081,()=>{
    console.log('listening');
});