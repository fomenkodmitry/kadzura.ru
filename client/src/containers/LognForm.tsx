import {FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";

export const LoginForm = (props: any) => {

    return (
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
    )
}