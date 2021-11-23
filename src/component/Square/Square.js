import React from 'react';
import './Square.css'
const Square = ({ num }) => {
    const handleClick = (num) => {
        alert(num)
    }
    return (
        <div className = 'square' onClick ={() => handleClick(num)}>
        </div>
    );
}

export default Square;
