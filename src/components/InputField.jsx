import React from "react";

const InputField = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.placeholder}>{props.placeholder}</label>
            <input type={props.type ?? 'text'} className="form-control" name={props.name} value={props.value ?? ''}
                   placeholder={props.placeholder} required={props.required} onChange={props.onChange}/>
        </div>
    )
};

export default InputField;