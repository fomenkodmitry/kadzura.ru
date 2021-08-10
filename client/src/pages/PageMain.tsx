import React, {FC} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import {Navbar} from "../containers/Navbar";
import {useDispatch} from "react-redux";
import {changeMobileIsOpen} from "../features/mobile/mobileIsOpenSlice";
import {Content} from "../containers/Content";

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
    }),
);

export const PageMain: FC = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const changeMobileOpen = () => {
        dispatch(changeMobileIsOpen())
    };
  
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
                    <Typography variant="h6" noWrap>
                        жопа
                    </Typography>
                </Toolbar>
            </AppBar>
            <Navbar/>
            <Content/>
        </div>
    );
}
