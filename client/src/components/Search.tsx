import SearchIcon from "@material-ui/icons/Search";
import {InputBase} from "@material-ui/core";
import {alpha, makeStyles} from "@material-ui/core/styles";
import React from "react";
import {useDispatch} from "react-redux";
import {setSearch} from "../features/search/searchSlice";
import {useDebounce} from "../hooks/useDebounce";

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(1),
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

export const Search : React.FC = () => {

    const classes = useStyles()

    const dispatch = useDispatch();

    const handleChange = useDebounce((event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length < 3)
            dispatch(setSearch({text: ""}));

        dispatch(setSearch({text: event.target.value}))
    }, 300);

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Поиск…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
                onChange={handleChange}
            />
        </div>
    )
}