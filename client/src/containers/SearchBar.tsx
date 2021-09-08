import React from "react";
import {Search} from "../components/Search";
import {useDebounce} from "../hooks/useDebounce";
import {setSearch} from "../features/search/searchSlice";
import {useDispatch} from "react-redux";

export const SearchBar : React.FC = () => {

    const dispatch = useDispatch();

    const handleChange = useDebounce((event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length < 3)
            dispatch(setSearch({text: ""}));

        dispatch(setSearch({text: event.target.value}))
    }, 300);
    
    return (
        <Search handleChange={handleChange}/>
    )
}