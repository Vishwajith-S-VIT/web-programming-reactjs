import React from "react";

class Q8 extends React.Component{
    TemperatureConverter(temp, type){
        if(type === 'C'){
            return (temp * 9/5) + 32;
        }else if(type === 'F'){
            return (temp - 32) * 5/9;
        }
    }
    render(){
        return(
            <div>
                <h1 align='center'>Temperature Converter</h1>
                <h2 align='center'>Enter the temperature and its type to convert</h2>
                <div style={{textAlign: 'center'}}>
                    <input type="number" id="temp" placeholder="Enter temperature" />
                    <select id="type">
                        <option value="C">Celsius</option>
                        <option value="F">Fahrenheit</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={() => {document.getElementById("result").value = this.TemperatureConverter(parseInt(document.getElementById("temp").value), document.getElementById("type").value)}}>Convert</button>
                    <br />
                    <br />
                    <input type="text" id="result" placeholder="Result" disabled />
                </div>
            </div>
        );
    }
}

export default Q8;