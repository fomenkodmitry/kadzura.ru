import React, {FC} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        listItem: {
            width: '70%',
        },
        divider: {
            width: '70%'
        }
    }),
);

export const Articles: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const toLink = (link: string) => {
        history.push(link);
    };
    return (
        <List className={classes.root}>
            <ListItem className={classes.listItem} alignItems="flex-start">
                <ListItemText
                    primary="Brunch this weekend?"
                    primaryTypographyProps={{variant: "h4"}}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                            </Typography>
                            {" — I'll be in yohborhoodneighood yohborhoodneighood  yohborhoodneighood  yohborhoodneighood yohborhoodneighood yohborhoodneighood yohborhoodneighood yohborhoodneighood yohborhoodneighood  doing errands this…"}
                            <br/>
                            <a>aaa</a>
                            <button onClick={()=>toLink("/article/123")}>
                                f
                            </button>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider className={classes.divider} light />
        </List>
    )
}