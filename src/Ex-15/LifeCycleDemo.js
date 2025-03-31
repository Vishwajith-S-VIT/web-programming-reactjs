import React from "react";

class LifeCycleDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            message: "Constructor was called - constructor()."
        };
        console.log("Constructor was called - constructor().");
    }

    componentDidMount(){
        this.setState({message: "Component was mounted - componentDidMount()."});
        console.log("Component was mounted - componentDidMount().");
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count){
            this.setState({message: "Component was updated - componentDidUpdate()."});
            console.log("Component was updated - componentDidUpdate().");
        }
    }

    componentWillUnmount(){
        console.log("Component will unmount - componentWillUnmount().");
    }

    render(){
        return(
            <div style={{textAlign:'center', fontSize: '20px'}}>
                <h1>Life Cycle Demo</h1>
                <p>Message: {this.state.message}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increase</button> &emsp;
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrease</button> <br/>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

export default LifeCycleDemo;