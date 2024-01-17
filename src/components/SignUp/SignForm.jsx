import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { User } from "react-feather";

import FormInput from './FormInput';
import SignUpFooter from './SignUpFooter';
import { Users } from '../../utils/BoardData/Boards';


const SignForm = ({ isRegistered, handleButton }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

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
      pattern: `^[A-Za-z0-9]{8,20}$`,
      required: true
    },
    {
      id: 4,
      name: "confirm_password",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());

    if (isRegistered) {
      for (let uid in Users) {
        const user = Users[uid];

        if (entries.email === user.email && entries.password === user.password) {
          navigate('/yourboards', { state: user });
          return;
        } else {
          console.log('User not found')
        }
      }
    } else {

      const newUser = {
        id: "u3",
        name: entries.username,
        email: entries.email,
        password: entries.password,
        boardList: []
      }

      const updatedUsers = {
        ...Users,
        [newUser.id]: newUser
      }

      console.log(updatedUsers);
      navigate('/yourboards', { state: newUser });
      return;
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Form
        className="signup-form"
        onSubmit={handleSubmit}
      >
        <div className='form-header'>
          <User />
          <h1> Welcome !</h1>
        </div>
        <div className="inputs">
          {
            isRegistered ? (
              <>
                <FormInput {...inputs[1]} handleChange={handleChange} />
                <FormInput {...inputs[2]} handleChange={handleChange} />
              </>
            ) : (
              inputs.map(input =>
                <FormInput
                  {...input}
                  key={input.id}
                  handleChange={handleChange}
                />
              )
            )
          }
          <button>{isRegistered ? "Sign In" : "Register"}</button>
        </div>
        <div className="form-footer">
          {
            isRegistered ?
              <SignUpFooter message={"Don't have an account? "} action={"Register"} handleButton={handleButton} />
              : <SignUpFooter message={"Already have an account? "} action={"Sign In"} handleButton={handleButton} />
          }
        </div>
      </Form>
    </>
  );
}

export default SignForm;