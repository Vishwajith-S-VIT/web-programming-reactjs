import React from "react";

class Q10 extends React.Component{
    render(){
        return(
            <>
                <h1 align='center'>Random Number Generator</h1>
                <h2 align='center'>Generate a random number between 1 and 100</h2>
                <div style={{textAlign: 'center'}}>
                    <button onClick={() => {
                        var num = Math.floor(Math.random() * 100) + 1;
                        document.getElementById("num").value = num;
                    }}>Generate</button>
                    <br />
                    <br />
                    <input type="text" id="num" placeholder="Number" disabled />
                </div>
            </>
        );
    }
}

export default Q10;