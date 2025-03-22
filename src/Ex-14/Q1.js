import React from "react";
import Pic1 from '../Images/logo512.png';

class Q1 extends React.Component{
    render(){
        return(
            <>
                <h1 align='center'>React Logo</h1>
                <div style={{textAlign: 'center'}}>
                    <img src={Pic1} alt='React Logo 1'/>
                    <img src={`${process.env.PUBLIC_URL}/Images/logo512.png`} alt="React Logo 2" />
                </div>
            </>
        );
    }
}
export default Q1;