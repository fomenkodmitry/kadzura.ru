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
import {thunkCreateInterviewQuestion} from "../features/interviewQuestions/thunkCreateInterviewQuestion";
import {TagDto} from "../models/Tag";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        prerender: {
            width: '100vh',
            wordWrap: 'break-word'
        }
    }),
);

const validationSchema = yup.object({
    question: yup
        .string()
        .required('Question is required'),
    answer: yup
        .string()
        .required('Answer is required'),
    tags: yup
        .array()
        .min(1, 'Tags is required')
        .required('Tags is required')
});

export const InterviewQuestionCreateForm = () => {

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
            question: "",
            answer: "",
            tags: []
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(thunkCreateInterviewQuestion(
                {
                    question: values.question,
                    answer: values.answer,
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
                    id="question"
                    name="question"
                    label="Заголовок"
                    value={formik.values.question}
                    onChange={formik.handleChange}
                    error={formik.touched.question && Boolean(formik.errors.question)}
                    helperText={formik.touched.question && formik.errors.question}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={10}
                    id="answer"
                    name="answer"
                    label="Текст"
                    type="answer"
                    value={formik.values.answer}
                    onChange={(event) => {
                        setValue(event.target.value)
                        formik.handleChange(event)
                    }}
                    error={formik.touched.answer && Boolean(formik.errors.answer)}
                    helperText={formik.touched.answer && formik.errors.answer}
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