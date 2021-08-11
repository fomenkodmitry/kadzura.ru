import React, {Component} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

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

export default function AlignItemsList() {
    const classes = useStyles();

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
                                Ali Connors
                            </Typography>
                            {" — I'll be in yohborhoodneighood yohborhoodneighood  yohborhoodneighood  yohborhoodneighood yohborhoodneighood yohborhoodneighood yohborhoodneighood yohborhoodneighood yohborhoodneighood  doing errands this…"}
                            <br/>
                            <a>aaa</a>
                            <button>
                                f
                            </button>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider className={classes.divider} light />
        </List>
    );
}