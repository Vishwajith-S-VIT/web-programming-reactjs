import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

class ProfilePage extends React.Component{
    render(){
        return(
            <div>
                <h1 align='center'>Profile Page</h1>
                <ProfileImage />
                <UserInfo />
                <UserPosts />
            </div>
        );
    }
}

export default ProfilePage;