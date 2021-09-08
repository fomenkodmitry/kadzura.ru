import React, {FC, useEffect} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTitle} from "react-use";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {thunkGetByIdArticle} from "../features/articles/thunkGetByIdArticle";
import ArticleDetail from "../components/ArticleDetail";

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

const Article: FC = () => {
    let {articleId} = useParams<{ articleId: string }>();

    const article = useNamedSelector('article')
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(thunkGetByIdArticle(articleId))
        },
        [dispatch, articleId]
    )

    useTitle('Статья: ' + articleId)
    return (
        <ArticleDetail article={article.data}/>
    )
}
export default Article;