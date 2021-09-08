import React from "react";
import {Select} from "@material-ui/core";
import {SelectorTag, TagPaged} from "../models/Tag";

type Props = { handleChange: any, tags: TagPaged, tagSelector: SelectorTag };

export const TagMenuList: React.FC<Props> = (props) => {
    return (
        <Select
            multiple
            native
            value={props.tagSelector.data.map(p => p.id.toString())}
            onChange={props.handleChange}
            inputProps={{
                id: 'select-multiple-native',
            }}
        >
            {
                props.tags.data.map(({id, name}) => {
                    return (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    )
                })
            }
        </Select>
    );
}