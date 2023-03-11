import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Checkbox, Button} from '@mui/material';

// components
import {Field, Form, Formik} from "formik";
import * as React from "react";
import * as Yup from "yup";
import Iconify from '../../../components/iconify';
/* import SimpleDialogDemo from "./SimpleDialogDemo"; */

// ----------------------------------------------------------------------




const registrationValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, ({label, min}) => `${label} must be greater than ${min} chars`)
        .max(20)
        .required()
        .label("Your name"),
    email: Yup.string()
        .email('Invalid email adress')
        .required('Required'),
    password: Yup.string()
        .min(9,"Must be longer than 9 char")
        .required('Required'),
})

export default function RegistrationForm() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

 const handleClick = () => {
            navigate('/', {replace: true});
        };

        return (
            <>
                <Stack spacing={3}>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                        }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                        validationSchema={registrationValidationSchema}>
                        {({errors, touched}) => (
                            <Form>
                                <Field id="name"
                                       name="name"
                                       label="Name"
                                       variant="outlined"
                                       fullWidth
                                       error={!!errors.name && touched.name}
                                       helperText={touched.name && errors.name}
                                       as={TextField}
                                />
                                <Field id="email"
                                       name="email"
                                       label="Email"
                                       variant="outlined"
                                       fullWidth
                                       error={!!errors.email && touched.email}
                                       helperText={touched.email && errors.email}
                                       as={TextField}
                                />
                                <Field id="password"
                                       name="password"
                                       label="Password"
                                       variant="outlined"
                                       fullWidth
                                       as={TextField}
                                       error={!!errors.password && touched.password}
                                       helperText={touched.password && errors.password}
                                       type={showPassword ? 'text' : 'password'}
                                       InputProps={{
                                           endAdornment: (
                                               <InputAdornment position="end">
                                                   <IconButton onClick={() => setShowPassword(!showPassword)}
                                                               edge="end">
                                                       <Iconify
                                                           icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                                   </IconButton>
                                               </InputAdornment>
                                           ),
                                       }}
                                />

                         {/* <SimpleDialogDemo/>  wanted to add a list where you can add an avatar for profile */}

                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
                                    <Checkbox name="remember" label="Remember me">Remember me</Checkbox>
                                    <Link variant="subtitle2" underline="hover">
                                        Forgot password?
                                    </Link>
                                </Stack>

                                <Button fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
                                    Register
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Stack>
            </>
        );
    }



