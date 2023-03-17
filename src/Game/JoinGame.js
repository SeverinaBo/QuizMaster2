import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Grid } from '@mui/material';
import ResponsiveAppBar from '../layouts/dashboard/header/ResponsiveAppBar';
import {Field, Formik} from 'formik';

const validationSchema = Yup.object().shape({
    nickname: Yup.string().required('Nickname is required'),
    pin: Yup.number().required('Game pin is required'),
});

export default function JoinGame() {
    const formik = useFormik({
        initialValues: {
            nickname: '',
            pin: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const { errors, touched, handleSubmit } = formik;

    return (
        <div>
            <ResponsiveAppBar />
            <Grid
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div>
                    <Formik>
                    <Field
                        name="nickname"
                        label="Nickname"
                        type="text"
                        error={errors.nickname && touched.nickname}
                        helperText={errors.nickname && touched.nickname && errors.nickname}
                        value={formik.values.nickname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <Field
                        name="pin"
                        label="Game pin"
                        type="number"
                        error={errors.pin && touched.pin}
                        helperText={errors.pin && touched.pin && errors.pin}
                        value={formik.values.pin}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <Button
                        style={{
                            fontSize: '1.6rem',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            margin: '1rem 0',
                        }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        Enter
                    </Button>
                    </Formik>
                </div>

            </Grid>
        </div>
    );
}
