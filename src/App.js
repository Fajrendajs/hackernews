import React, { Component } from "react";
import "./App.css";
import NumberList from "./NumberList";

const link = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clarke",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const numbers = [1, 2, 3, 4, 5];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.link.map(item => (
          <div key={item.objectID}>
            <li>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.num_comments}</span>
            </li>
          </div>
        ))}
        <NumberList numbers={numbers} />
      </div>
    );
  }
}

export default App;
