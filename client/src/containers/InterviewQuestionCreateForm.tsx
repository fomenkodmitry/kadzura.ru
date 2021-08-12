import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {InputLabel, Paper, Select} from "@material-ui/core";

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
    question: yup
        .string()
        .required('Question is required'),
    answer: yup
        .string()
        .required('Answer is required'),
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
export const InterviewQuestionCreateForm = () => {

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            question: 'foobar@example.com',
            answer: 'foobar',
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
                        id="question"
                        name="question"
                        label="Вопрос"
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
                        label="Ответ"
                        type="answer"
                        value={formik.values.answer}
                        onChange={formik.handleChange}
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