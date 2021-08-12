import React, {FC} from 'react';
import { useTitle } from 'react-use/lib';
import {Articles} from "../containers/Articles";

const PageMain: FC = () => {
    useTitle("Статьи")
    return (
        <Articles/>
    );
}
export default PageMain;