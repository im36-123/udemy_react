import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./playground/counter"

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount = () => {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      console.log("options", options);
      if (options) {
        this.setState({ options });
      }
    } catch (e) {
      // Do nothing at all
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { options } = this.state;
    if (prevState.options.length !== options.length) {
      const json = JSON.stringify(options);
      localStorage.setItem("options", json);
    }
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption = option => {
    console.log("option", option);
    const { options } = this.state;
    if (!option) {
      return "Enter valid value to add item";
    } else if (options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the handas of computer";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <Counter />
      </div>
    );
  }
}

const Header = props => {
  const { title, subTitle } = props;
  return (
    <div>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Default title"
};

// stateless functional component
const Action = props => {
  const { handlePick, hasOptions } = props;

  return (
    <div>
      <button onClick={handlePick} disabled={!hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

// class component
// class Action extends Component {
//   render() {
//     const { handlePick, hasOptions } = this.props;

//     return (
//       <div>
//         <button onClick={handlePick} disabled={!hasOptions}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = props => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      {options.length === 0 &&<p>Please add an option to get started!</p>}
      {options.map((option, index) => (
        <Option
          key={index}
          optionText={option}
          handleDeleteOption={handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      error: undefined
    };
  }
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

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
