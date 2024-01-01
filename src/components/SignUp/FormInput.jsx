import React from 'react';

import './FormInput.scss';

const FormInput = (props) => {
    const { label, errorMessage, id, ...inputProps } = props;
    
    return (
        <div className="form__input">
            <label>{label}</label>
            <input {...inputProps}/>
        </div>
    )
}

export default FormInput;