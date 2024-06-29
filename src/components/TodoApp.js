import React, { Component } from 'react'
 import "./TodoApp.css"
import { Button} from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css"
export default class TodoApp extends Component {
   //?useState 
  
    state = {
        input:"",
        items:[]
    }
      
    handleChange =(event)=>{
        this.setState({
            input:event.target.value
        });
      
    }

storeItem=(eve)=>{
     eve.preventDefault();
     const {input} = this.state;
     this.setState({
     items:[...this.state.items,input]
    });
    };

  render() {
    const {input,items} = this.state;
    return(
       <div className='todo-container'>
 
        <form className='input-section'onSubmit={this.storeItem}>
        <h1>Todo App</h1>
            <input type="text" value={input} onChange={this.handleChange} placeholder='Enter...'/>
            <Button>ADD</Button>
        </form>
        <ul>
            {items.map((data,index)=>(
            <li key={index}>{data} <i className='bi bi-x-lg'></i></li>
            ))}
        </ul>
      </div>
    )

  }
}
