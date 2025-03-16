import React from "react";
import { Hello1, Hello2, Hello3 } from "./Q1-parts";

class Q1 extends React.Component {
  render() {
    return (
      <div>
        <Hello1 />
        <Hello2 />
        <Hello3 />
      </div>
    );
  }
}

export default Q1;