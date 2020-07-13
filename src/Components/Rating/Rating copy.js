import React, { Component } from "react";

class Rating extends Component {

  constructor(){
    super();
     this.state = {
      value: 0,
    };   
  }


  // Not that we are using an arrow function in here
  // If we just use the standard function, we will need to bind the function inside our constructor. The arrow function does the binding for us automatically 

  increment = () => {

    // For the purpose of our example, lets just make the increment function add the rating by one 
      this.setState((state) => {
        return {
          value: state.value + 1,
        };
      });
  };
  decrement = () => {

    // The same thing for our decrement function 
    // Lets make it so that it decreases the rating by 1 
    this.setState((state) => {
      return {
        value: state.value - 1,
      };
    });
  };


  render() {
    return (
      <div>
        <h2>Rating block</h2> 
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Your rated this product : {this.state.value}</div>
      </div>
    );
  }
}

export default Rating;