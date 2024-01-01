import React, { useState } from 'react';
import { Form } from 'react-router-dom';

import './SignUp.scss';
import FormInput from './FormInput';

const SignUp = () => {
    const [ isRegistered, setIsRegistered ] = useState(false);
    const [ values, setValues ] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage: "Username should be 3-16 characters and shouldn't include any special charachters(@, #, $, %, etc.)",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "Email is invalid",
          label: "Email",
          required: true
        },

        {
          id: 3,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage: "Password should be 8-20 characters and should include 1 letter, 1 special character, 1 number",
          label: "Password",
          pattern: `^(?=.*[a-zA-Z])(?=.*)(?=.*[!@#$%^&*()_+])[A-Za-z!@#$%^&*()_+]{8,20}`,
          required: true
        },
        {
          id:4,
          name:"confirm_password",
          type:"password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match",
          label: "Confirm Password",
          pattern: values.password,
          required: true
        },
    ]

    const handleButton = () => {
        setIsRegistered(isRegistered => !isRegistered );
    }
    return (
        <div className="signup">
            <Form className="signup-form">
                <h1>{ isRegistered? "Register" : "Sign In" }</h1>
                {
                    isRegistered? (
                        inputs.map(input => (
                            <FormInput 
                                {...input}
                                key={input.id}
                            />
                        ))
                    ) : (
                        <>
                            <FormInput 
                                {...inputs[1]}
                            />
                            <FormInput 
                                {...inputs[2]}
                            />
                        </>
                    )
                }
                <div onClick={handleButton}>{ isRegistered? "Sign In" : "Register" }</div>    
            </Form>
        </div>
    );
}

export default SignUp;