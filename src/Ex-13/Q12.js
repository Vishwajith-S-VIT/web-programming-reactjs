import React from "react";

function UserGreeting(props){
    return(
        <>
            <h1 align='center'>Hello, {props.firstName} {props.lastName}!</h1>
        </>
    );
}

class Q12 extends React.Component{
    render(){
        return(
            <>
                <UserGreeting firstName='Vishwajith' lastName='S'/>
            </>
        );
    }
}

export default Q12;