﻿import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {InputLabel, Paper, Select, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        prerender: {
            width: '100vh',
            wordWrap: 'break-word'
        }
    }),
);

const validationSchema = yup.object({
    title: yup
        .string()
        .required('Title is required'),
    text: yup
        .string()
        .required('Text is required'),
});

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
export const ArticleCreateForm = () => {

    const [value, setValue] = useState("");

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            title: undefined,
            text: undefined,
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
                id="title"
                name="title"
                label="Заголовок"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
                fullWidth
                multiline
                rows={10}
                id="text"
                name="text"
                label="Текст"
                type="text"
                value={formik.values.text}
                onChange={(event) => {
                    setValue(event.target.value)
                    formik.handleChange(event)
                }}
                error={formik.touched.text && Boolean(formik.errors.text)}
                helperText={formik.touched.text && formik.errors.text}
            />
            <InputLabel shrink htmlFor="select-multiple-native">
                Теги
            </InputLabel>
            <Select
                id="tags"
                multiple
                fullWidth
                native
                inputProps={{
                    id: 'select-multiple-native',
                }}
                {...formik.getFieldProps("tags")}
            >
                {names.map((name) => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </Select>
            <Paper className={classes.prerender}>
                <div>
                    <Typography>Prerender:</Typography>
                    <div dangerouslySetInnerHTML={{__html: value}}/>
                </div>
            </Paper>
            <Button color="primary" variant="contained" fullWidth type="submit">
                Создать
            </Button>
        </form>
    );
};