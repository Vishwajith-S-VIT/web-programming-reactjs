import React from "react";

function Q3(){
    var Button = {backgroundColor:'grey', color:'darkblue', padding:'10px', fontSize:'20px'};
    return(
        <div style={{textAlign:'center', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <button style={Button}>This is a styled button with internal CSS</button>
        </div>
    );
}

export default Q3;