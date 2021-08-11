import React, {FC} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {Navbar} from "../containers/Navbar";
import {useDispatch} from "react-redux";
import {changeMobileIsOpen} from "../features/mobile/mobileIsOpenSlice";
import {navigationLayout} from "../dataset/navigationLayout";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useNamedSelector} from "../hooks/useNamedSelector";

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
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        navigation: {
            justifyContent: 'center',
            flexGrow: 1,
            display: 'flex',
            columnGap: '20px'
        },
        link: {
            color: '#ffffff'
        },
        fulltext: {
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        smalltext: {
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        }
    }),
);

const Layout: FC = ({children}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const changeMobileOpen = () => {
        dispatch(changeMobileIsOpen())
    };

    const history = useHistory();
    const toLink = (link: string) => {
        history.push(link);
    };

    const {isOpen} = useNamedSelector('mobileIsOpen')

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={changeMobileOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div className={classes.navigation}>
                        {navigationLayout.map(({link, nameFull, nameSmall}) => {
                            return (
                            <Button className={classes.link} onClick={() => toLink(link)}>
                                <span className={classes.fulltext}>{nameFull}</span>
                                <span className={classes.smalltext}>{nameSmall}</span>
                            </Button>
                            )
                        })}
                    </div>
                </Toolbar>
            </AppBar>
            <Navbar/>
            <main className={classes.content}>{children}</main>
        </div>
    );
}
export default Layout;