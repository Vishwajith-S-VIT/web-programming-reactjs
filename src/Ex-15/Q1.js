import React from "react";

function Header(props){
  return(
    <div>
      <header>
        <h1 align='center'>{props.title}</h1>
      </header>
    </div>
  );
}

function Jokes(){
  var Joke = ["What did one snowman say to the other snowman? It smells like carrots over here!", "Why did Beethoven get rid of his chickens? All they ever said was, “Bach, Bach, Bach!”", "What do you call a fake noodle? An impasta!", "Why does it take pirates a long time to learn the alphabet? Because they can spend years at C!"];
  return(
    <div style={{textAlign:"center"}}>
      <button onClick={() => {
        var num = Math.floor(Math.random() * 4);
        document.getElementById("joke").innerHTML = Joke[num];
      }}>Generate a joke!</button>
      <p id="joke"></p>
    </div>
  );
}

function Footer(){
  return(
    <div style={{textAlign:"center"}}>
      <footer>
        <h2>This is a static footer</h2>
      </footer>
    </div>
  );
}

function Q1(){
  return (
    <div>
      <Header title="Generate Random Joke" />
      <Jokes />
      <Footer />
    </div>
  );
}

export default Q1;