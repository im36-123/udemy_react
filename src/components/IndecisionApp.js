import React, { Component } from "react";
import Counter from "./Counter";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount() {
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
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (prevState.options.length !== options.length) {
      const json = JSON.stringify(options);
      localStorage.setItem("options", json);
    }
  }

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

  handleClearSelectedOption = () => {
    console.log("1");
    this.setState({
      selectedOption: undefined
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    // this.setState(() => ({
    //   selectedOption: option
    // }));
    this.setState({
      selectedOption: option
    });
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
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
        </div>
        <div className="widget">
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />

        <Counter />
      </div>
    );
  }
}

export default IndecisionApp;
