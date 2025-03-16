import React from "react";

class Hello1 extends React.Component {
  render() {
    return (
        <h1 align='center'>Hello, React!</h1>
    );
  }
}

class Hello2 extends React.Component {
  render() {
    return (
        React.createElement('h1', {align:"center"}, `Hello, React!`)
    );
  }
}

class Hello3 extends React.Component {
  render() {
    var x = "Blue";
    return(<h2 align='center'>The value of x is: '{x}'!</h2>)
  }
}

export{
    Hello1,
    Hello2,
    Hello3
};