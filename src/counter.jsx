import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1> 
ReactDOM.render(element, document.getElementById('root'));

import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1> 
ReactDOM.render(element, document.getElementById('root'));

class Counter extends Components {
  state = {
      count:0
  };

handleIncrement = () => {
  this.setState({ count: this.state.count +1});
   };

render() {
  return (
      <div>
          <span> className = {this.getBadgeClasses()}  {this.formatCount()}</span>
          <button
          onClick={this,handleIncrement}
          className="btn btn-decondary btn-sm"
          >
              Increment 
              </button>
      </div>
          
  );
  
}
}