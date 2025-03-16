import React from "react";

class Q4 extends React.Component{
    render(){
        var x = 5, y = 9;
        return(
            <>
                <p style={{fontSize:'20px', textAlign:"center"}}>The sum of squares of x and y is: {x**2 + y**2}</p>
            </>
        );
    }
}

export default Q4;