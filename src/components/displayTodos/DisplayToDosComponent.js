import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import './DisplayToDosComponent.css'; 

class DisplayToDos extends Component{

  constructor(props) {
    super(props);
    this.state = {
      todos:this.props.objectToDisplay
    }
  }
 
  render() {
  return (
    <div>
      <ul>
        {this.state.todos.map((todo)=><li key={todo.id}> {todo.description} <p id={todo.description} onClick={this.props.removeElement}> remove </p> </li> )}
      </ul>
      </div>
  )};
}


DisplayToDos.propTypes = {
  objectToDisplay:
    PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string
    }))
};


export default DisplayToDos;
