import React from "react";
import {Search} from "../components/Search";
import {useDebounce} from "../hooks/useDebounce";
import {clearSearch, setSearch} from "../features/search/searchSlice";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {useHistory} from "react-router-dom";

export const SearchBar : React.FC = () => {

    const dispatch = useDispatch();

    const search = useNamedSelector('search')

    const history = useHistory();

    const handleChange = useDebounce((event: React.ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(window.location.search)
        if (event.target.value.length < 3)
        {
            params.delete("q")
            dispatch(clearSearch());
        } else {
            params.set("q", event.target.value)
            dispatch(setSearch({text: event.target.value}))
        }
        history.push({search: params.toString()})
    }, 300);
    
    return (
        <Search handleChange={handleChange} search={search.text}/>
    )
}