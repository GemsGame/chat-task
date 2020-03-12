import React from "react";

const CustomButton = ({ className, children, action }) => {

    return (
        <button className={className} onClick={action}>{children}</button>
    )
}

export default CustomButton;