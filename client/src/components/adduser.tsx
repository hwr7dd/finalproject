import { IonButton} from "@ionic/react";
import {useState,useEffect} from "react";
import './adduser.css';
import UserList from './userList'

export default function FruitForm() {
  const fruited={
    Name:"",
    Quantity:0,
    edit:false
  };
  const [fruit, setfruit] = useState(fruited);
  const [tasks, setTasks] = useState([]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfruit((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(fruit)
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setfruit(fruit);
    console.log("sent")
    fetch('/api/tasks/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Name: fruit.Name,Quantity:fruit.Quantity, edit:fruit.edit }),
    }).then(() => {
      setfruit(fruited)
      getTasks();
    });
  };
  const getTasks = () => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(setTasks);
      console.log("sent")
      console.log(tasks)

  };

  useEffect(() => {
    getTasks();
  }, []);



  return (
    <div>
    <div id='submitted'>
      <form onSubmit={onSubmit}>
        <label className='labels' htmlFor="Name">Name: </label>
        <input type="text" id="Name"  onChange={onChange} />
        <label className='labels' htmlFor="Quantity">Quantity: </label>
        <input  type="number" id="Quantity"  onChange={onChange} />
        <IonButton color="success" type="submit">Add Grocery Item</IonButton>
      </form>
   </div>
 <UserList tasks={tasks} updateTasks={getTasks}></UserList>

   </div>
    
  );
}
// import React, { useState, useEffect, useCallback } from 'react';
//  import '../App.css';


// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTaskTitle, setNewTaskTitle] = useState('');

//   const getTasks = () => {
//     fetch('/api/tasks')
//       .then(res => res.json())
//       .then(setTasks);
//   };

//   useEffect(() => {
//     getTasks();
//   }, []);

//   const clickAddTask = event => {
//     event.preventDefault();

//     fetch('/api/tasks/add', {
//       method: 'post',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: newTaskTitle }),
//     }).then(() => {
//       setNewTaskTitle('');
//       getTasks();
//     });
//   };

//   return (
//     <div className="App">
//       <h1>My Tasks</h1>


//       <form onSubmit={clickAddTask}>
//         <input
//           type="text"
//           placeholder="New Task"
//           value={newTaskTitle}
//           onChange={event => setNewTaskTitle(event.target.value)}
//         />
//         <input className="btn-primary" type="submit" value="Add" />
//       </form>
//     </div>
//   );
// };

// export default App;
