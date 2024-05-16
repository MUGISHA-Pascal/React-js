import React from 'react';
export default function ProductCard() {
    const Product = "Inyange water";
    const bl=Product === "Inyange water"
    return (
        <div>
            { bl ? <h1>{Product} is perfect for a good health</h1> : <h1>dont know the product</h1> }
        </div>

    );
};
