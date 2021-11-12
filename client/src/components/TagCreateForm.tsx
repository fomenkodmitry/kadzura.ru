import React from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {thunkCreateTag} from "../features/tags/thunkCreateTag";
import {Dispatch} from "redux";
import {ButtonGoBack} from "./ButtonGoBack";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backButton: {
            color: '#000000'
        }
    }),
);

const validationSchema = yup.object({
    name: yup
        .string()
        .required('name is required'),
});

type Props = { dispatch: Dispatch<any>};

export const TagCreateForm: React.FC<Props> = ({dispatch}) => {
    const classes = useStyles()
    
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
            <br/>
            <ButtonGoBack fullWidth className={classes.backButton}/>
        </form>
    );
};