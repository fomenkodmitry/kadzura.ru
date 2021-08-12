import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {useTitle} from "react-use";
import {useParams} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

const PageArticle: FC = () => {
    const classes = useStyles();
    let {articleId} = useParams<{ articleId: string }>();

    useTitle('Статья:' + articleId)
    return (
            <Typography paragraph>
                Book details page: <strong>{articleId}</strong>
            </Typography>
    )
}
export default PageArticle;