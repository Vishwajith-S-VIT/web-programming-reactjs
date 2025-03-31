import React, {useState, useReducer} from "react";

const counterReducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            if(state.count === 0){
                console.log("Count cannot be negative - userReducer.");
                return state;
            }
            else{
                return { count: state.count - 1 };
            }
        default:
            return state;
    }
};

function Decrease(count, setCount){
    if(count === 0){
        console.log("Count cannot be negative - useState.");
    }
    else{
        setCount(count - 1);
    }
}

function Q6(){
    const [count, setCount] = useState(0);
    const [counter, dispatchCounter] = useReducer(counterReducer, { count: 0 });
    var ButStyle = {fontSize: '15px', padding:'5px', margin:'5px'};
    return(
        <div style={{textAlign:'center', fontSize: '20px'}}>
            <button style={ButStyle} onClick={() => setCount(count + 1)}>Increase</button> &emsp;
            <button style={ButStyle} onClick={() => Decrease(count, setCount)}>Decrease</button> <br/>
            <p>Count using useState: {count}</p>
            <button style={ButStyle} onClick={() => dispatchCounter({ type: 'increment' })}>Increase</button> &emsp;
            <button style={ButStyle} onClick={() => dispatchCounter({ type: 'decrement' })}>Decrease</button> <br/>
            <p>Count using useReducer: {counter.count}</p>
        </div>
    );
}

export default Q6;