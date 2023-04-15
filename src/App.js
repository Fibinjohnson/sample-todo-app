
import React from 'react'
import "./App.css"
import { useState } from 'react';


function App() {
  
  
  function today(){
    const d = new Date();
    console.log(d);
    let day = d.getDay()+1;
    if (day===1){
      return 'Sunday';
    }
    else if(day===2){
     return "monday";
    }
    else if (day===3){
      return 'tuesday';
    }
    else if (day===4){
      return 'wednsday';
    }
    else if (day===5){
      return 'thursday';
    }
    else if (day===6){
      return 'friday';
    }
    else if (day===7){
      return 'Saturday';
    }
  }
  const [todos,setToDos]=useState([])
  const [todo,setToDo]=useState('')
 return (
  <div className="app">
  <div className="mainHeading">
    <h1>ToDo List</h1>
  </div>
  <div className="subHeading">
    <br />
    <h2>Whoop, it's {today()} 🌝 ☕ </h2>
  </div>

  <div className="input">

    <input onChange={(e)=>setToDo(e.target.value)} value={todo} type="text" placeholder="🖊️ Add item..." />
    <i onClick={()=>setToDos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
  </div>
  <div className="todos">
  { todos.map((obj)=>{
    return(<div className="todo">
      <div className="left">
      <input type="checkbox" onChange={(e)=>{
         setToDos(todos.filter((obj2)=>{if(obj2.id===obj.id){ obj2.status=e.target.checked }
         {return obj2}}))}}  value={obj.status} name="" id="" />
        <p>{obj.text}</p>
      </div>
      <div className="right">
        <i className="fas fa-times" onClick={()=>{ setToDos(todos.filter((obj2)=>{let temp;if(obj2.id!==obj.id){ temp=obj2 }
         {return temp}}))}}></i>
      </div>
    </div>)})
}
  </div>
</div>
  )
  }

export default App;