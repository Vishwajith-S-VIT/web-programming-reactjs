import React from "react";

class Q9 extends React.Component{
    render(){
        return(
            <>
                <h1 align='center'>Palindrome Checker</h1>
                <h2 align='center'>Enter a string to check if it is a palindrome</h2>
                <div style={{textAlign: 'center'}}>
                    <input type="text" id="str" placeholder="Enter a string" />
                    <br />
                    <br />
                    <button onClick={() => {
                        var str = document.getElementById("str").value;
                        var strr = str.split('').reverse().join('');
                        document.getElementById("strrev").innerHTML = "Reversed string: "+strr;
                        if(str === strr){
                            document.getElementById("result").value = "Palindrome";
                        }else{
                            document.getElementById("result").value = "Not Palindrome";
                        }
                    }}>Check</button>
                    <br />
                    <p id='strrev'></p>
                    <input type="text" id="result" placeholder="Result" disabled />
                </div>
            </>
        );
    }
}

export default Q9;