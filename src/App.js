import React from 'react';
import {useState, useEffect} from 'react';
import CreateTask from './CreateTask';
import axios from'axios';
import ToDo from './ToDo';
import img from './images/test.png';



const App = props => {

    const [task,setTask]=useState();

    const[updated, setUpdated]=useState(0);

    const handleUpdates=()=>{
            
            if(updated==1)
                setUpdated(0)
            else
                setUpdated(1)
            

    }

  

    return (<div id="app">

       
       <h1>My Todo List</h1>
         <p style={{textAlign: "center"}} ><a style={{color: "white", textTransform:"uppercase", fontWeight:"bold"}} href="https://youtu.be/qBnPCOowjQs">Watch Demo</a></p>


        <div className='background'>
        
          <img src={img} />
    
        </div>
        
        
        
        <CreateTask handleUpdates={handleUpdates}/>
        <ToDo handleUpdates={handleUpdates} updated={updated}/>
        
        
        
    </div>);
}

export default App;
