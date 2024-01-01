import React from 'react';

import './FormInput.scss';

const FormInput = (props) => {
    const { label, errorMessage, ...inputProps } = props;
    
    return (
        <div className="form-input">
            <label>{label}</label>
            <input {...inputProps}/>
        </div>
    )
}

export default FormInput;