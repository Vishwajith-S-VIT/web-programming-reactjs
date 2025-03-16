import React from "react";

class Q6 extends React.Component{
    render(){
        var day = new Date().getDay();
        var dayName = "";
        switch(day){
            case 0:
                dayName = "Sunday";
                break;
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            default:
                dayName = "Invalid Day";
        }
        return(
            <>
                <p style={{fontSize:'20px', textAlign:"center"}}>Today is {dayName}</p>
            </>
        );
    }
}

export default Q6;