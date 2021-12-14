import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";

type Props = { className: string, fullWidth?: boolean }
export const ButtonGoBack : React.FC<Props> = ({className, fullWidth})  => {
    const history = useHistory();

    return (
        <Button onClick={() => history.goBack()} className={className} fullWidth={fullWidth}>НАЗАД</Button>
    );
}