import React from "react";

function Child(props){
    return(
        <div>
            <h2>Child Component</h2>
            <p>Message from Parent: "{props.message}"</p>
        </div>
    );
}

function Q10(){
    const message = "Hello from Parent Component!";
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Parent Component</h1>
            <p>Message to Child: "{message}"</p>
            <Child message={message} />
        </div>
    );
}

export default Q10;