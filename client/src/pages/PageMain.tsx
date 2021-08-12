import React, {FC} from 'react';
import {Main} from "../containers/Main";
import { useTitle } from 'react-use/lib';

const PageMain: FC = () => {
    useTitle("kadzura | мой блох")
    
    return (
        <Main/>
    );
}
export default PageMain;