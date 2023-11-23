import React from 'react'
import Link from '@mui/material/Link';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import {
    Container,
    Grid,
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
    Button,
    Avatar,
    Alert,
    InputAdornment,
    IconButton,
    FormControl, InputLabel, Select, MenuItem
} from "@mui/material";
import "./Login.css"
import * as Yup from "yup";
import { ErrorMessage, Formik } from 'formik';
import { ValidationErrorMessage } from '../../components/ValidationErrorMessage';

export const Login = () => {
    const [showAlert, setShowAlert] = useState("");
    const [user, setUser] = useState();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email Format is not valid").required("Email is required"),
        password: Yup.string().required("Password is required"),
        
    });
    const auth = getAuth();
    const authentication=(data)=>{
        if(data){
            
            signInWithEmailAndPassword(auth,data.email, data.password).then((userCredential) => {
                const userData = userCredential.userData;
                localStorage.setItem("userData",JSON.stringify(data));
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
    }
    return (
        <div className="login-container">
            <div className="login-form">

                <img src="/lakehead.png" alt="Lakeheaf Logo" width="50%" height="50%" />

                <Formik
                    initialValues={{
                        email: "",
                        password: "",

                    }}
                    validationSchema={validationSchema}
                    onSubmit={data => {
                        let user = {
                            email: data.email,
                            password: data.password,

                        }
                        if(user){
                            console.log(user)
                            authentication(user); 
                        }
                    }
                    }
                >
                    {({ values, handleChange, handleBlur, errors, handleSubmit, touched, setFieldValue, setFieldError }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="login-form-input">
                                <div className="email-input">
                                    <TextField name="email" type='email' required label='Email' sx={{ width: 100 + "%" }} onChange={handleChange} onBlur={handleBlur} />
                                    <ValidationErrorMessage message={errors.email} touched={errors.email} />
                                </div>
                                <div className="password-input">
                                    <TextField name="password" type='password' required label='Password' sx={{ width: 100 + "%" }} onChange={handleChange} onBlur={handleBlur} />
                                    <ValidationErrorMessage message={errors.password} touched={errors.password} />
                                </div>
                            </div>
                            <div className="login-form-button">
                                <Button variant='contained' fullWidth type="submit">Login</Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
