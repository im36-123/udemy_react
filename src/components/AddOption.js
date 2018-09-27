import React, { Component } from "react";

class AddOption extends Component {
  state = {
    error: undefined
  };
  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.option;
    const error = this.props.handleAddOption(option.value.trim());
    this.setState(() => ({ error }));
    if (!error) {
      option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form action="" onSubmit={this.handleAddOption}>
          <input type="text" name="option" id="" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
