import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloggedin: false
        }
    }

    render() {
        // if (this.state.isloggedin) {
        //     return (
        //         <div>
        //             hello user
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             login please
        //         </div>
        //     )
        // }
        // variable element
        //     let message;
        //     if (this.state.isloggedin) {
        //         message = <h1>hello guest</h1>
        //     } else {
        //         message = <h1>login please</h1>
        //     }
        //     return <div>{message}</div>
        // }
        // conditional operator
        return this.state.isloggedin ? (<div>hello guest</div>) : (<div>login</div>);
    }
}
