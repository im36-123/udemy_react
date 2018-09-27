import React, { Component } from "react";

class ToggleVisibility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      return { visibility: !prevState.visibility };
    });
  }

  render() {
    const { visibility } = this.state;
    return (
      <div>
        <button onClick={this.handleToggleVisibility}>
          {visibility ? "hide" : "show"}
        </button>
        {visibility && <p>aaa</p>}
      </div>
    );
  }
}

export default ToggleVisibility;
