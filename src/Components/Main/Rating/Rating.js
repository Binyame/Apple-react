import React, { Component } from "react";

class Rating extends Component {

  constructor(){
    super();
     this.state = {
      value: 5,
    };   
  }

  increment = () => {

    // For the purpose of our example, lets just make the increment function arr the rating by one 
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
    // Conditional rendering in React 
    let initialText = "Average rating:";
    let changedText = "You rated this product:"
    let displayText = ""; 

    let counter = 1; 

    if(this.state.value != 5){
      counter = counter + 1; 
    }

    if(counter >= 2){
      displayText = changedText;
    }else{
      displayText = initialText; 
    }

    
    return (
      <div className="rating-wrapper">
        <h3>Please rate this mac out of 10</h3> 
        <div>
          <button className="postive" onClick={this.increment}> Rate up </button>
          <button className="negative" onClick={this.decrement}> Rate down </button>
          <div className="rating-result"> {displayText} {this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default Rating;