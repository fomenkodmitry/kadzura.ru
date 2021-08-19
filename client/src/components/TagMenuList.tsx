import React, {useEffect} from "react";
import {Select} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {thunkGetTags} from "../features/tags/thunkGetTags";

export const TagMenuList: React.FC = () => {

    const dispatch = useDispatch();
    const tags = useNamedSelector('tags')

    useEffect(() => {
            dispatch(thunkGetTags())
        },
        [dispatch]
    )

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPersonName(event.target.value as string[]);
    };
    
    const handleChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { options } = event.target as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };
    
    return (
        <Select
            multiple
            native
            value={personName}
            onChange={handleChangeMultiple}
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