import React from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
    name: yup
        .string()
        .required('name is required'),
});

export const TagCreateForm = () => {

    const formik = useFormik({
        initialValues: {
            name: undefined,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="name"
                name="name"
                label="Название"
                type="name"
                value={formik.values.name}
                onChange={(event) => {
                    formik.handleChange(event)
                }}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
                Создать
            </Button>
        </form>
    );
};