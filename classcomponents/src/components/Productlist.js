import React, { Component } from "react";
export default class Productlist extends Component {
    render(){
        const products = ["inyange", "orange"];
        return (<h1>this {products.map((item)=>(<p>{item}</p>))}</h1>);
    };
};
