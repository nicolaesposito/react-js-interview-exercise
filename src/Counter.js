import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'; // Import PropTypes

// Counter Component
export default class Counter extends Component {
    render() {
        
      return (
        <div className="counter">
          <b>{this.props.value}</b>
          <div className="counter-controls">
            <Button variant="danger" className="mr-2">
              -
            </Button>
            <Button variant="success" className="mr-2">
              +
            </Button>
          </div>
        </div>
      );
    }
  }

 // Define propTypes for your component
 Counter.propTypes = {

}