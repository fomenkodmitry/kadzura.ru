import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {LoginForm} from "../containers/LognForm";
import {useTitle} from "react-use";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const PageAdminLogin: FC = () => {
    const classes = useStyles();
    useTitle('Авторизация админа')

    return (
        <LoginForm/>
    )
}
export default PageAdminLogin;