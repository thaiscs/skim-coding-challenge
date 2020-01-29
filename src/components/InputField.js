import React, { Component } from "react";
import OutputField from "./OutputField";

class InputField extends Component {
  state = {
    inputNumber: ""
  };

  handleChange = event => {
    this.setState({
      inputNumber: event.target.value
    });
  };

  render() {
    const number = this.state.inputNumber;
    return (
      <div className="input-field">
        <input
          className="input-box"
          type="number"
          min="1"
          max="18"
          placeholder="Input Integer"
          onChange={this.handleChange}
          value={number}
        />
        <OutputField calculate={number} />
      </div>
    );
  }
}

export default InputField;
