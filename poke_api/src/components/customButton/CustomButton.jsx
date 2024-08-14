import React from 'react';
import './CustomButton.css';


const CustomButton = ({ handleClick, label }) => {
    return (
        <div className="custom-button" onClick={handleClick}>
            {label}
        </div>
    )
}

export default CustomButton;
