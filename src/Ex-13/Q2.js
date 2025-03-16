import React from "react";

class Q2 extends React.Component{
    render(){
        var fruits = ["Apple", "Banana", "Mango"];
        return(
            <div>
                <h1 align='center'>List of Fruits</h1>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Q2;