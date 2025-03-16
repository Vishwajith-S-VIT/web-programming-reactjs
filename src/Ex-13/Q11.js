import React from "react";

class Q11 extends React.Component{
    render(){
        return(
            <>
                <h1 align='center'>Leap Year Checker</h1>
                <h2 align='center'>Check if a year is a leap year or not</h2>
                <div style={{textAlign: 'center'}}>
                    <input type="text" id="year" placeholder="Year" />
                    <br />
                    <br />
                    <button onClick={() => {
                        var year = document.getElementById("year").value;
                        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
                            document.getElementById("result").innerHTML = year + " is a leap year.";
                        }else{
                            document.getElementById("result").innerHTML = year + " is not a leap year.";
                        }
                    }}>Check</button>
                    <p id='result'></p>
                </div>
            </>
        );
    }
}

export default Q11;