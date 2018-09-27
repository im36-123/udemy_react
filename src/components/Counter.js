import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  componentDidMount = () => {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) this.setState({ count });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.count !== this.state.count) {
      const { count } = this.state;
      localStorage.setItem("count", count);
    }
  };
  handlePlus = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  handleMinus = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  };
  handleReset = () => {
    this.setState({
      count: 0
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleReset}>0</button>
      </div>
    );
  }
}

export default Counter;
