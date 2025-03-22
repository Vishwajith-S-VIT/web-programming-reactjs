import React from "react";
import ProfileImg from "./PI.jpg";

class ProfileImage extends React.Component{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <img src={ProfileImg} alt="Profile Image" height={102} width={69} />
            </div>
        );
    }
}

export default ProfileImage;