import React, {FC, useEffect} from "react";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {changeMobileIsOpen} from "../features/mobile/mobileIsOpenSlice";
import {useNamedSelector} from "../hooks/useNamedSelector";
import mobileIsOpen from "../features/mobile/mobileIsOpenSlice";
import {contacts} from "../dataset/contacts";
import {navigationLayout} from "../dataset/navigationLayout";
import {Button, Divider} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        image: {
            width: '25px',
            height: '25px',
            margin: '10px',
        },
        logo: {
            display: 'block',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            background: "#323234",
        },
        drawerElements: {
            color: '#ffffff'
        },
        link: {
            color: '#ffffff',
        },     
        buttonLink: {
            color: '#ffffff',
            maxWidth: '200px',
            minWidth: '200px'
        },
        contacts: {
            textAlign: 'center',
            paddingTop: '30px'
        },
        navigation: {
            paddingTop: '30px',
            paddingBottom: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }),
);

export const Navbar: FC = () => {

    const classes = useStyles();

    const theme = useTheme();

    const dispatch = useDispatch();

    const changeMobileOpen = () => {
        dispatch(changeMobileIsOpen())
    };
    const {isOpen} = useNamedSelector('mobileIsOpen')

    const history = useHistory();
    const toLink = (link: string) => {
        history.push(link);
    };


    const drawer = (
        <div className={classes.drawerElements}>
            <div className={classes.toolbar}/>
            <img className={classes.logo} src={"/resources/logo.png"} alt="img"/>
            <Typography variant="h4" align={"center"}>
                мой блох
            </Typography>
            <Typography variant="subtitle2" align={"center"}>
                тут типа мои статьи по IT, а так же раздел для подготовки к собесу
            </Typography>

            <div className={classes.navigation}>
                {navigationLayout.map(({link, name}) => {
                    return (
                        <div>
                            <Button className={classes.buttonLink} onClick={() => toLink(link)}>
                                {name}
                            </Button>
                            <Divider/>
                        </div>
                    )
                })}
            </div>

            <div className={classes.contacts}>
                <div>
                    {contacts.map(({link, imageUrl}) => (
                        <a className={classes.link} target="_blank"
                           href={link}>
                            <img className={classes.image} src={imageUrl}/>
                        </a>
                    ))}
                </div>
                <Typography variant="subtitle1">
                    © Dmitriy Fomenko 2021
                </Typography>
            </div>
        </div>
    );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={isOpen}
                    onClose={changeMobileOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )
}