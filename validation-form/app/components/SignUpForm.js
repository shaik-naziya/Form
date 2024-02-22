"use client";
import React, { useEffect, useState } from 'react';
import Validation from './Validation';
import '../globals.css';


function SignUpForm({ SubmitButton }) {

    const [value, setValue] = useState({
        fullname:"",
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState({});

    const [data, setData] = useState();
    useEffect(() => {
        if (Object.keys(errors).length == 0  && data){
            SubmitButton(true)
        }
    }, [errors])
 
    const handleOnClick = (e) => {
        e.preventDefault();
        setErrors(Validation(value));
        setData(true);
    };

    const handleOnChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form autoComplete="off" className="container">
                <h2 className="h3">Sign Up Here</h2>
                <label htmlFor="fullname" className="name">Full Name:</label>
                <input
                    value={value.fullname}
                    onChange={handleOnChange}
                    type="text"
                    name="fullname"
                    id="fullname" // Add unique id attribute
                    className="input"
                    placeholder="Enter Your Full Name"
                    autoComplete="name"
                />
                    {errors.fullname && <p className="p">{errors.fullname}</p>}

                <label htmlFor="email" className="email">Email:</label>
                <input
                    value={value.email}
                    onChange={handleOnChange}
                    type="text"
                    name="email"
                    id="email" // Add unique id attribute
                    className="input"
                    placeholder="Enter Your Mail"
                    autoComplete="email"
                />
                     {errors.email && <p className="p">{errors.email}</p>}

                <label htmlFor="password" className="password">Password:</label>
                <input
                    value={value.password}
                    onChange={handleOnChange}
                    type="password"
                    name="password"
                    id="password" // Add unique id attribute
                    className="input"
                    placeholder="Enter Your Password"
                    autoComplete="new-password"
                />
                    {errors.password && <p className="p">{errors.password}</p>}

                <button className="button" onClick={handleOnClick}>Submit</button>
            </form>
        </>
    );
}

export default SignUpForm;
