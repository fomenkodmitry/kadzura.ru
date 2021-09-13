import React, {FC} from 'react';
import {useTitle} from "react-use";
import {TagCreate} from "../containers/TagCreate";

const PageAdminTagCreate: FC = () => {
    useTitle('Добавление тэгов')

    return (
        <TagCreate/>
    )
}
export default PageAdminTagCreate;