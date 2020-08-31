import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class AddToDoComponents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length:null
      }
    this.changeState = this.changeState.bind(this);
    }

  changeState(event) {
    this.setState({ 
      length: event.target.value.length
    })
  }

  render() {
  return (
    <div>
      <input onChange={this.changeState}></input> 
      {this.state.length > 0 ? <button onClick={this.props.addFunction}> Add todo </button> : null}
    </div>
  )};
}

AddToDoComponents.propTypes = {
  addFunction: PropTypes.func.isRequired
};


export default AddToDoComponents;