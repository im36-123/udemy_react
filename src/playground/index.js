import React from "react";
import ReactDOM from "react-dom";

let isVisible = true;

const onVisibilityToggle = () => {
  isVisible = !isVisible;
  render();
};

const render = () => {
  const dom = (
    <div>
      <h1>Hi</h1>
      <button onClick={onVisibilityToggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <p>Yes</p>}
    </div>
  );

  ReactDOM.render(dom, document.getElementById("root"));
};

render();
