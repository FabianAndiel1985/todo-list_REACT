import React, {Component} from 'react';
import './PanelComponent.css';

class Panel extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div id="Panel-container">
    	<div id="Panel-firstRow">
        {this.props.title}
    	</div>
        {this.props.children}
    </div>
  )};
}

export default Panel;
