import React from "react";

function Form1(){
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleSubmit1 = (e) => {
        e.preventDefault();
        console.log("Form 1 pressed submit.");
    }

    return(
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Form 1</h1>
            <form>
                <label>Name:</label><br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
                <label>Email:</label><br/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
                <button type="submit" onClick={handleSubmit1}>Submit</button>
            </form>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}

function Form2(){
    const inputName = React.useRef(null);
    const inputEmail = React.useRef(null);

    const handleSubmit2 = (e) => {
        e.preventDefault();
        const name = inputName.current.value;
        const email = inputEmail.current.value;
        document.getElementById("name").innerText = `Name: ${name}`;
        document.getElementById("email").innerText = `Email: ${email}`;
    }

    return(
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Form 2</h1>
            <form>
                <label>Name:</label><br/>
                <input type="text" ref={inputName} /><br/><br/>
                <label>Email:</label><br/>
                <input type="email" ref={inputEmail} /><br/><br/>
                <button type="submit" onClick={handleSubmit2}>Submit</button>
            </form>
            <p id="name"></p>
            <p id="email"></p>
        </div>
    );
}

function Q12(){
    return (
        <div>
            <Form1 />
            <Form2 />
        </div>
    );
}

export default Q12;