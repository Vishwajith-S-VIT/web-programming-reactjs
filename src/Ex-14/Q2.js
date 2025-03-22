import React from "react";

class Q2 extends React.Component{
    render(){
        return(
            <div>
                <h1 align='center'>Novell Services Login</h1>
                <form>
                    <table border={0} align="center" cellPadding={5}>
                    <tr>
                        <td>
                            <label htmlFor="username">Username: </label>
                        </td>
                        <td>
                            <input type="text" id="username" name="username" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="password">Password: </label>
                        </td>
                        <td>
                            <input type="password" id="password" name="password" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="City">City of<br />Employment: </label>
                        </td>
                        <td>
                            <input type="text" id="City" name="City" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="webserver">Web server: </label>
                        </td>
                        <td>
                            <select id="webserver" name="webserver">
                                <option value='none'>-- Choose a server --</option>
                                <option value="Apache">Apache</option>
                                <option value="IIS">IIS</option>
                                <option value="Tomcat">Tomcat</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="role">Please specify<br />your role: </label>
                        </td>
                        <td>
                            <input type="radio" id="role" name="role" value="Admin" /> Admin <br />
                            <input type="radio" id="role" name="role" value="Engineer" /> Engineer <br />
                            <input type="radio" id="role" name="role" value="Manager" /> Manager <br />
                            <input type="radio" id="role" name="role" value="Guest" /> Guest
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="services">Single Sign-on<br />to the following: </label>
                        </td>
                        <td>
                            <input type="checkbox" id="services" name="services" value="Mail" /> Mail <br />
                            <input type="checkbox" id="services" name="services" value="Payroll" /> Payroll <br />
                            <input type="checkbox" id="services" name="services" value="Self-service" /> Self-service
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <input type="submit" value="Login" /> &nbsp;
                            <input type="reset" defaultValue="Reset" />
                        </td>
                    </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default Q2;