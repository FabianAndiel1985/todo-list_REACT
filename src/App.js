import React, {Component} from 'react';
import Panel from './components/panel/PanelComponent';
import DisplayToDos from './components/displayTodos/DisplayToDosComponent';
import AddToDoComponents from './components/addTodos/AddToDoComponents';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      todos: [{id:0, description:"Walk the dog"},
              {id:1, description:"Learn a new language"},
              {id:2, description:"Third task"}
             ]
    }
    this.addToDo = this.addToDo.bind(this);
    this.removeElement = this. removeElement.bind(this);
  }

  addToDo() {
    let todosArray = this.state.todos; 
    let newIndex = this.findLatestIndex(todosArray);
    let description = document.querySelector("input").value;
    todosArray.unshift({id:newIndex+1, description:description});
    this.setState({
      date: todosArray
    });
  }

  findLatestIndex(todosArray) {
    let maxIndex = 0;
    todosArray.forEach((todo) =>
    {
      if(todo.id>maxIndex) {
        maxIndex = todo.id
      }
    })
    return maxIndex;
  }

  removeElement(event) {
    let currentToDoArray = this.state.todos;
    let toDoDescription= event.target.id;
    let indexOfElement = this.getIndexOfElement(currentToDoArray,toDoDescription);
    currentToDoArray.splice(indexOfElement,1);
    currentToDoArray = this.updateArrayIndexes(currentToDoArray);
    this.setState({
      todos:currentToDoArray 
      })
  }

   getIndexOfElement(currentToDoArray,toDoDescription) {
     let elementIndex = null; 
     currentToDoArray.forEach((item,index)=>{
       if(item.description == toDoDescription){
         elementIndex = index;
       }
     }) 
     return elementIndex;
   }

   updateArrayIndexes(currentToDoArray) {
     currentToDoArray.forEach((item,index)=>{
       item.id=index;
     }) 
     return currentToDoArray;
   }


  render() {
  return (
    <div className="App">
    <Panel title="Your todos">
       <DisplayToDos objectToDisplay={this.state.todos} removeElement={this.removeElement}></DisplayToDos>
    </Panel>
    <Panel id="addToDoPanel" title="Add your todos">
      <AddToDoComponents addFunction={this.addToDo}></AddToDoComponents>
    </Panel>
    </div>
  )};
}

export default App;
