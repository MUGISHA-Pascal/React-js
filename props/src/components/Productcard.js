import React, { Component } from "react";
class Productcard extends Component {
    render() {
        return (
            <div>
                <h1>
                    The products we have are :
                </h1>
                <p>the product is {this.props.product}</p>
                <p>the product price is {this.props.productprice}</p>


            </div>
        );
    }
}
export default Productcard;