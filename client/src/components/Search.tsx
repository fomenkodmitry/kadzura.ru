import SearchIcon from "@material-ui/icons/Search";
import {InputBase} from "@material-ui/core";
import {alpha, makeStyles} from "@material-ui/core/styles";
import React from "react";

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

type Props = { handleChange: any, search: string | null | undefined};

export const Search : React.FC<Props> = (props)  => {

    const classes = useStyles()

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
                onChange={props.handleChange}
                defaultValue={props.search}
            />
        </div>
    )
}