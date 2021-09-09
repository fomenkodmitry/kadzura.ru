import React, {FC, useEffect} from 'react';
import {useTitle} from "react-use";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {thunkGetByIdArticle} from "../features/articles/thunkGetByIdArticle";
import ArticleDetail from "../components/ArticleDetail";
import {setIsShowFilters} from "../features/layout/layoutSlice";

const Article: FC = () => {
    let {articleId} = useParams<{ articleId: string }>();

    const article = useNamedSelector('article')
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(thunkGetByIdArticle(articleId))
            dispatch(setIsShowFilters({isShowFilters: false}))
        },
        [dispatch, articleId]
    )

    useTitle('Статья: ' + article?.data?.title)
    return (
        <ArticleDetail article={article.data}/>
    )
}
export default Article;