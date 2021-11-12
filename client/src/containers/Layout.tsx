import React, {FC} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {changeNavbarMobileIsOpen} from "../features/mobile/navbarMobileIsOpenSlice";
import {TagMenu} from "./TagMenu";
import {SearchBar} from "./SearchBar";
import {Navbar} from "./Navbar";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {ButtonGoBack} from "../components/ButtonGoBack";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
            background: "#323234"
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        filters: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(0),
        },
        toolbar: theme.mixins.toolbar,
        backButton: {
            color: '#FFFFFF'
        }
    }),
);

const Layout: FC = ({children}) => {
    const classes = useStyles();

    const layout = useNamedSelector('layout')

    const dispatch = useDispatch();

    const changeMobileOpen = () => {
        dispatch(changeNavbarMobileIsOpen())
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={changeMobileOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div className={classes.filters}>
                        {
                            layout.isShowFilters
                                ?
                                <>
                                    <SearchBar/>
                                    <TagMenu/>
                                </>
                                :
                                <ButtonGoBack className={classes.backButton}/>
                        }
                    </div>
                </Toolbar>
            </AppBar>
            <Navbar/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
}
export default Layout;