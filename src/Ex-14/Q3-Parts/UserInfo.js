import React from "react";

class UserInfo extends React.Component{
    render(){
        return(
            <div>
                <table border={2} cellSpacing={0} cellPadding={5} align='center'>
                    <tr>
                        <th>Name: </th>
                        <td>S Vishwajith</td>
                    </tr>
                    <tr>
                        <th>Age: </th>
                        <td>19</td>
                    </tr>
                    <tr>
                        <th>DOB: </th>
                        <td>27-August-2005</td>
                    </tr>
                    <tr>
                        <th>Email ID: </th>
                        <td>vishwajith.s2023@vitstudent.ac.in</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default UserInfo;