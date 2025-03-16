import React from "react";

class Q7 extends React.Component{
    isPrime(x){
        if(x<2) return false;
        for(var i=2; i<=Math.sqrt(x); i++){
            if(x%i===0) return false;
        }
        return true;
    }
    render(){
        var num = prompt("Enter a number:");
        num = parseInt(num);
        return(
            <>
                <p style={{fontSize:'20px', textAlign:"center"}}>{num} is {this.isPrime(num)?"Prime":"Not Prime"}</p>
            </>
        );
    }
}

export default Q7;