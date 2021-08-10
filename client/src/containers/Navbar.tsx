import React, {FC, useEffect} from "react";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {changeMobileIsOpen} from "../features/mobile/mobileIsOpenSlice";
import {useNamedSelector} from "../hooks/useNamedSelector";
import mobileIsOpen from "../features/mobile/mobileIsOpenSlice";

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
            margin: '10px'
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
            color: '#ffffff'
        },
        contacts: {
            textAlign: 'center',
            paddingTop: '30px'
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

    const drawer = (
        <div className={classes.drawerElements}>
            <div className={classes.toolbar}/>
            <Typography variant="h4" align={"center"}>
                {/*<QuestionAnswerIcon/>*/}
                мой блох
            </Typography>
            <Typography variant="subtitle2" align={"center"}>
                тут типа мои статьи по IT, а так же раздел для подготовки к собесу
            </Typography>

            <div className={classes.contacts}>
                <div>
                    <a className={classes.link} target="_blank" href="https://github.com/fomenkodmitry">
                        <img className={classes.image} src={"contacts/github.png"}/>
                    </a>
                    <a className={classes.link} target="_blank" href="https://vk.com/kadzura">
                        <img className={classes.image} src={"contacts/vk.jpg"}/>
                    </a>
                    <a className={classes.link} target="_blank" href="mailto:blackreaper200@gmail.com">
                        <img className={classes.image} src={"contacts/gmail.png"}/>
                    </a>
                    <a className={classes.link} target="_blank"
                       href="https://www.linkedin.com/in/дмитрий-фоменко-15b547197m">
                        <img className={classes.image} src={"contacts/in.png"}/>
                    </a>
                </div>
                <Typography variant="subtitle1">
                    © Dmitriy Fomenko 2021
                </Typography>
            </div>
        </div>
    );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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