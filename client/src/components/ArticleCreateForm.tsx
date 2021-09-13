import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {InputLabel, Paper, Select, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {thunkGetTags} from "../features/tags/thunkGetTags";
import {TagDto} from "../models/Tag";
import {thunkCreateArticle} from "../features/articles/thunkCreateArticle";

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
    tags: yup
        .array()
        .min(1, 'Tags is required')
        .required('Tags is required')
});

export const ArticleCreateForm = () => {

    const dispatch = useDispatch();
    const tags = useNamedSelector('tags')
    const isLogin = useNamedSelector('login');

    useEffect(() => {
        dispatch(thunkGetTags())
    }, [dispatch])

    const [value, setValue] = useState("");

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            title: "",
            text: "",
            tags: []
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(thunkCreateArticle(
                {
                    title: values.title,
                    text: values.text,
                    tags: values.tags.map(p => {
                        return {tagId: p} as TagDto
                    })
                }
            ))
        },
    });

    return (
        isLogin.isLogin
            ?
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
                    {tags.data.map(({id, name}) => (
                        <option key={id} value={id}>
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
            :
            <>Access denied</>
    );
};