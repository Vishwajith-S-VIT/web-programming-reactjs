import React from "react";
import PropTypes from "prop-types";

function Child(props){
    return(
        <div>
            <h2>Child Component</h2>
            <p>Message from Parent: "{props.message}"</p>
        </div>
    );
}

function Q11(){
    const message = "Hello from Parent Component!";
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Parent Component</h1>
            <p>Message to Child: "{message}"</p>
            <Child message={message} />
        </div>
    );
}

Q11.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Q11;