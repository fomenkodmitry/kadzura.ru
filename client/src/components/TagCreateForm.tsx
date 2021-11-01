import React, {useEffect} from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {thunkCreateTag} from "../features/tags/thunkCreateTag";
import {TagPaged} from "../models/Tag";
import {Dispatch} from "redux";

const validationSchema = yup.object({
    name: yup
        .string()
        .required('name is required'),
});

type Props = { dispatch: Dispatch<any>};

export const TagCreateForm: React.FC<Props> = ({dispatch}) => {
    
    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(thunkCreateTag({
                name: values.name
            }))
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