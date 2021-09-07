import React, {FC} from 'react';
import { useTitle } from 'react-use/lib';
import {Articles} from "../containers/Articles";

const PageArticle: FC = () => {
    useTitle("Статьи")
    return (
        <Articles/>
    );
}
export default PageArticle;