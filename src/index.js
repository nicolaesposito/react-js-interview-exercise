import React, { Component } from "react";
import ReactDOM from "react-dom";
import StartFile from "./StartFile";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StartFile />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
