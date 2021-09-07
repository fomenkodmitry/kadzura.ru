import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {useTitle} from "react-use";
import {useParams} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        detail: {
            margin: 'auto',
            padding: '2em'
        },
        root: {
            display: 'flex',
            height: `10vh`
        }
    }),
);

const PageArticleDetail: FC = () => {
    const classes = useStyles();
    let {articleId} = useParams<{ articleId: string }>();

    useTitle('Статья:' + articleId)
    return (
        <div className={classes.root}>
            <div className={classes.detail}>
                Bofasdfok details pfdsafasdfage: <strong>{articleId}</strong>
                adsfasdf detafdasfasdfils pfdsafasdfage: <strong>{articleId}</strong>
                Book deasdfasdfafdsafasdfsasdtails pfdsafasdfage: <strong>{articleId}</strong>
                Book deasdfafadsasdfasdfafdsafasdfsasdtails pfdsafasdfage: <strong>{articleId}</strong>
                Book deasdfasdfasdtails pfdsafasdfage: <strong>{articleId}</strong>
                Book deasdfasdfasdtails pfdsafasdfage: <strong>{articleId}</strong>
                Book fasdfasdasdffasdf pfdsafasdfage: <strong>{articleId}</strong>
            </div>
        </div>
    )
}
export default PageArticleDetail;