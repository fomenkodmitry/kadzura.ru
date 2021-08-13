import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Login} from "../containers/Login";
import {useTitle} from "react-use";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const PageAdminLogin: FC = () => {
    const classes = useStyles();
    useTitle('Авторизация админа')

    return (
        <Login/>
    )
}
export default PageAdminLogin;