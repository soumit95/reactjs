import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import Hello from "./Hello";
class ContactList extends React.Component {
  render() {
    const people = [{ name: "soumit" }, { name: "raja" }];
    return <ol>{people.map(ppl => <li>{ppl.name}</li>)}</ol>;
  }
}

ReactDOM.render(<ContactList />, document.getElementById("root"));
