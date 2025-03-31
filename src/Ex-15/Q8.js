import React, {useRef} from "react";

function Q8(){
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <input type="text" ref={inputRef} placeholder="Focus on this." />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
}

export default Q8;