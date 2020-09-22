import React from "react";

const Button = (props) => {
    return(
        <button className={props.className} value={props.value} type={props.type ?? 'submit'}>
            {props.label ?? 'Save'}
        </button>
    )
};

export default Button;