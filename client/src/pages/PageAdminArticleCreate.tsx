import React, {FC} from 'react';
import {useTitle} from "react-use";
import {ArticleCreate} from "../containers/ArticleCreate";

const PageAdminArticleCreate: FC = () => {
    useTitle('Добавление статьи')

    return (
        <ArticleCreate/>
    )
}
export default PageAdminArticleCreate;