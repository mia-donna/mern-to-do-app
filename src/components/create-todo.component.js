import React, {Component} from 'react';

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

    
  // resetting method - still need to add submit logic for backend

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted`);
        console.log(`Todo Description: ${this.state.todo_description}`)
        console.log(`Todo Responsible: ${this.state.todo_responsible}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)
        console.log(`Todo Completed: ${this.state.todo_completed}`)


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
               </form>
            </div>
        )
    } 
}