import React from 'react'
import Link from '@mui/material/Link';
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
    IconButton
} from "@mui/material";
import "./Login.css"
export const Login = () => {
    const [showAlert, setShowAlert] = useState("");

    // const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = new FormData(event.currentTarget);
            const form = {
                userName: data.get("userName").trim(),
                password: data.get("password").trim(),
            };

            const { userName, password } = form;
            if (!(userName && password)) {
                setShowAlert("Invalid username or password");
                return;
            }
            //Login
            // const res = await fetch(`${process.env.REACT_APP_API_BASE}/auth/login`, {
            //     method: "POST",
            //     body: JSON.stringify(form),
            //     headers: {
            //         "content-type": "application/json"
            //     }
            // });
            // const response = await res.json();
            // const { token, user, error } = response;
            const res = { ok: true };
            const error = "";

            if (res.ok) {
                // Cookies.set("token", token);

                // navigate("/", { replace: true });
                console.log(form);
                setShowAlert("");
            } else {
                throw Error(error);
            }
        } catch (err) {
            setShowAlert("Invalid username or password");
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    mt: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <img src="/lakehead.png" alt="Lakehead University" height="200rem" />

                
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    {showAlert && (
                        <Alert severity="error" sx={{ mt: 3 }}>
                            {showAlert}
                        </Alert>
                    )}

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="Username"
                        name="userName"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        id="password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>

                    <Grid container>
                        <Grid item l>
                            <Link href="#" variant="body2">
                                Recover my account
                            </Link>
                        </Grid>
                    </Grid>
                    
                </Box>
            </Box>
        </Container>
    );
}
