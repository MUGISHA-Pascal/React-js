import React,{Component} from 'react';
class Subscribe extends Component {
    constructor(){
        super();
        this.state={
            message:"welcome visitor"
        }
    }
    changemessage(){
        this.setState({
            message:"thank you for subscribing"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changemessage()}>Subscribe</button>
            </div>
        );
    }
}
export default Subscribe;