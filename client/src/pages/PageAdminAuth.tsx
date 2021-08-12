import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const PageAdminAuth: FC = () => {
    const classes = useStyles();

    return (
        <Typography paragraph>Авторизация
        </Typography>
    )
}
export default PageAdminAuth;