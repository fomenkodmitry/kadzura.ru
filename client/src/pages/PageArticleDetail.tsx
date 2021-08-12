import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {useTitle} from "react-use";
import {useParams} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
    }),
);

const PageArticle: FC = () => {
    const classes = useStyles();
    let {articleId} = useParams<{ articleId: string }>();

    useTitle('Статья:' + articleId)
    return (
        <div>
            <div className={classes.toolbar}/>
            <Typography paragraph>
                Book details page: <strong>{articleId}</strong>
            </Typography>
        </div>
    )
}
export default PageArticle;