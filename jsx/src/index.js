import React from "react";
import ReactDOM from "react-dom";

const App = function () {
  const buttonText = "Click me!";
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
