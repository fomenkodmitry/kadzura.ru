import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";

export const ButtonAddTag : React.FC = ()  => {
    const history = useHistory();
    
    return (
        <Button onClick={()=>history.push("/admin/tag/create")}>+</Button>
    );
}