import React, { useState } from "react";
import LifeCycleDemo from "./LifeCycleDemo";

function Q5() {
    const [showComponent, setShowComponent] = useState(true);

    return (
        <div style={{ textAlign: "center", fontSize: "20px" }}>           
            <button onClick={() => setShowComponent(!showComponent)}>
                {showComponent ? "Unmount LifeCycleDemo" : "Mount LifeCycleDemo"}
            </button>
            
            {showComponent && <LifeCycleDemo />}
        </div>
    );
}

export default Q5;
