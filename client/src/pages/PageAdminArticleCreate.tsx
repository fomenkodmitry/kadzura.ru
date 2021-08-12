import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const PageAdminArticleCreate: FC = () => {
    const classes = useStyles();

    return (
        <Typography paragraph>
            Добавление статьи!
        </Typography>
    )
}
export default PageAdminArticleCreate;