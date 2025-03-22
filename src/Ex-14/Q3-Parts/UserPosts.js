import React from "react";

class UserPosts extends React.Component{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <h1>User Posts/Repositories</h1>
                <table border={0} cellSpacing={2} cellPadding={5} align="center">
                    <tr>
                        <td>Web Programming Standard:</td>
                        <td><a href="https://github.com/Vishwajith-S-VIT/Web-Programming">Link</a></td>
                    </tr>
                    <tr>
                        <td>Web Programming ReactJS:</td>
                        <td><a href="https://github.com/Vishwajith-S-VIT/web-programming-reactjs">Link</a></td>
                    </tr>
                    <tr>
                        <td>Project:</td>
                        <td><a href="https://github.com/Pixel-Synth/Quiz-Master">Link</a></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default UserPosts;