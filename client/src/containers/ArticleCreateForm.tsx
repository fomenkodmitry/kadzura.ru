import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {InputLabel, ListItemText, MenuItem, Paper, Select} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loginForm: {
            padding: '10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
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
    
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            title: 'foobar@example.com',
            text: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={classes.loginForm}>
            <Paper>
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
                        onChange={formik.handleChange}
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
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Создать
                    </Button>
                </form>
            </Paper>
        </div>
    );
};