import React from "react";

class Q5 extends React.Component{
    render(){
        var isMorning = new Date().getHours() < 12;
        var greeting = isMorning ? "Good Morning" : "Good Evening";
        return(
            <>
                <p style={{fontSize:'20px', textAlign:"center"}}>{greeting}</p>
            </>
        );
    }
}

export default Q5;