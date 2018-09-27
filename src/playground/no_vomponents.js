import React from "react";
import ReactDom from "react-dom";
// import { render } from "react-dom";

// import reducer from "./reducer";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

const app = {
  title: "Some title",
  subTitle: "This is my subtitle",
  options: []
};

const onFormSubmit = e => {
  console.log(e);
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  render();
};

const onRemoveAll = e => {
  app.options = [];
  render();
};

const onMakeDesition = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDesition}>What shoud I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  const AppRoot = document.getElementById("root");
  ReactDom.render(template, AppRoot);
};

render();
