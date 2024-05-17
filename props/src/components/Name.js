import React from 'react';
const Name = props => {
    return(
        <div>
            <h1>
                hello {props.name} also called {props.namy} and the children prop is {props.children}
            </h1>
            {props.children}
        </div>
    )
}
export default Name