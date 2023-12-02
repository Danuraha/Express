
import './App.css';
import React from 'react';
import{Router} from 'react-router-dom';
import CreateStudent from './createStudent';
import Form from './form';
import UpdateStudent from './updateStudent';
function App() {
  return (
    <div className="App">
      <CreateStudent/>
      <Form/>
      <UpdateStudent/> 
    </div>
  );
}

export default App;
