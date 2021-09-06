import React, {useEffect} from "react";
import {Select} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {thunkGetTags} from "../features/tags/thunkGetTags";
import {setSelectorTags} from "../features/tagSelector/tagSelectorSlice";
import {SelectorTag} from "../models/Tag";

export const TagMenuList: React.FC = () => {

    const dispatch = useDispatch();
    const tags = useNamedSelector('tags')
    const tagSelector = useNamedSelector('tagsSelector')

    useEffect(() => {
            dispatch(thunkGetTags())
        },
        [dispatch]
    )
    
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { options } = event.target as HTMLSelectElement;
        const value: SelectorTag = {
            data: []
        };
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.data.push(...tags.data.filter(p => p.id.toString() == options[i].value));
            }
        }
        dispatch(setSelectorTags(value))
    };

    return (
        <Select
            multiple
            native
            value={tagSelector.data.map(p => p.id.toString())}
            onChange={handleChange}
            inputProps={{
                id: 'select-multiple-native',
            }}
        >
            {
                tags.data.map(({id, name}) => {
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