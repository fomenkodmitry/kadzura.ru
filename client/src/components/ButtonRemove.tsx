import React from "react";
import {Button} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type Props = { className?: string, action: any }
export const ButtonRemove : React.FC<Props> = ({className, action})  => {

    return (
        <Button onClick={action} className={className}><Delete/></Button>
    );
}