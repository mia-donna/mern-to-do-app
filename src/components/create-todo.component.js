import React, {Component} from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);
//bind methods to this object
        this.onChangeToDoDescription = this.onChangeToDoDescription.bind(this);
        this.onChangeToDoResponsible = this.onChangeToDoResponsible.bind(this);
        this.onChangeToDoPriority = this.onChangeToDoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

// methods to handle events on our form
    onChangeToDoDescription(e) {
      this.setState({
           todo_description: e.target.value
      });
    } 
    
    onChangeToDoResponsible(e) {
        this.setState({
             todo_responsible: e.target.value
        });
      } 

    onChangeToDoPriority(e) {
        this.setState({
             todo_priority: e.target.value
        });
      }   

    
  // onsubmit event handler - resetting method - still need to add submit logic for backend

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted`);
        console.log(`Todo Description: ${this.state.todo_description}`)
        console.log(`Todo Responsible: ${this.state.todo_responsible}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)
        console.log(`Todo Completed: ${this.state.todo_completed}`)

        // communicate with backend - we have created a new todo object
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
        
        // our server is running on port 400, this is the endpoint which is accepting incoming post request which contain data of new todo item
        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));
 
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }


    render() {
        return (
            
            <div style={{marginTop: 20}}>
               <h3>Create New Todo</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Description: </label>
                       <input type="text"
                              className="form-control" 
                              value={this.state.todo_description}
                              onChange={this.onChangeToDoDescription}
                              />
                   </div>
                   <div className="form-group">
                       <label>Responsible: </label>
                       <input type="text"
                              className="form-control" 
                              value={this.state.todo_responsible}
                              onChange={this.onChangeToDoResponsible}
                              />
                   </div>
                   <div className="form-group">
                       <div  className="form-check form-check-inline">
                           <input className="form-check-input"
                                  type="radio"
                                  name="priorityOptions"
                                  id="priorityLow"
                                  value="Low"
                                  checked={this.state.todo_priority==='Low'}
                                  onChange={this.onChangeToDoPriority}
                                  />
                            <label className="form-check-label">Low</label>       
                       </div>
                       <div  className="form-check form-check-inline">
                           <input className="form-check-input"
                                  type="radio"
                                  name="priorityOptions"
                                  id="priorityMedium"
                                  value="Medium"
                                  checked={this.state.todo_priority==='Medium'}
                                  onChange={this.onChangeToDoPriority}
                                  />
                            <label className="form-check-label">Medium</label>       
                       </div>
                       <div  className="form-check form-check-inline">
                           <input className="form-check-input"
                                  type="radio"
                                  name="priorityOptions"
                                  id="priorityHigh"
                                  value="High"
                                  checked={this.state.todo_priority==='High'}
                                  onChange={this.onChangeToDoPriority}
                                  />
                            <label className="form-check-label">High</label>       
                       </div>
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Create Todo" className="btn btn-primary" />
                   </div>
               </form>
            </div>
        )
    } 
}