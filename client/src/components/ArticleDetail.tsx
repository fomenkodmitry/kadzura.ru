import React, {FC} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Article} from "../models/Article";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        detail: {
            padding: '2em'
        },
        root: {
            display: 'flex',
            height: `10vh`
        }
    }),
);

type Props = {
    article: Article
}
const ArticleDetail: FC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.detail}>
                {
                    props.article === undefined
                        ? <div>Не такого</div>
                        :
                        <>
                            <div><h3>{props.article.title}</h3></div>
                            <div>
                                <h5> | Tags: {
                                    props?.article?.tags?.map(p => p?.tag?.name).join(", ")
                                }
                                </h5>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: props.article.text}}/>
                        </>
                }
            </div>
        </div>
    )
}
export default ArticleDetail;