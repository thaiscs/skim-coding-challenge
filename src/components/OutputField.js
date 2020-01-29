import React, { Component } from "react";
import factorial from "../functionality/calculateFactorial";

class OutputField extends Component {
  render() {
    const number = this.props.calculate;
    const integer = parseInt(number);

    if (integer) {
      return <div className="output-field"> {factorial(integer)}</div>;
    }
    return <div></div>;
  }
}

export default OutputField;
