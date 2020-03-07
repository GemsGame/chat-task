import React, { Component } from "react";

const CustomInput = ({ labelName,
    placeholder,
    action,
    name,
    value,
    className,
    }) => {
    return (
        
        
            <input
                className={className}
                placeholder={placeholder}
                name={name}
                onChange={action}
                value={value}
            />
        
    )
}

export default CustomInput;
