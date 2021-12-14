import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {useHistory} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {ArticlePaged} from "../models/Article";
import {ButtonRemove} from "./ButtonRemove";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            width: '70%',
            '&:hover': {
                backgroundColor: '#ffffFf'
            }
        },
        divider: {
            width: '70%',
        },
        infinityScroll: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        tags: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }),
);

type Props = { list: ArticlePaged, onPageChange: any, count: number, toLink: (link: string) => void, isAuth: boolean, removeAction: (id: string) => void };

export const ArticleList: React.FC<Props> = ({list, onPageChange, count, toLink, isAuth, removeAction}) => {
    const classes = useStyles();

    return (
        <List style={{justifyContent: 'center'}}>
            <InfiniteScroll
                dataLength={list.data.length}
                next={onPageChange}
                hasMore={list.data.length == count}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Всё :(</b>
                    </p>
                }
                className={classes.infinityScroll}
            >
                {
                    list?.data?.map(({id, title, tags}) => {
                            return (
                                <>
                                    <ListItem className={classes.listItem} alignItems="center" key={id}>
                                        <ListItemText
                                            onClick={() => toLink("/article/" + id)}
                                            primary={title}
                                            primaryTypographyProps={{variant: "h4"}}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        color="textPrimary"
                                                    >
                                                    </Typography>
                                                    <span className={classes.tags}> | Tags: {
                                                        tags.map(p => p.tag.name).join(", ")
                                                    }</span>
                                                </React.Fragment>
                                            }
                                        />
                                        {
                                            isAuth && <ButtonRemove action={() => removeAction(id)}/>
                                        }
                                    </ListItem>
                                    <Divider className={classes.divider} light/>
                                </>
                            )
                        }
                    )
                }
            </InfiniteScroll>
        </List>
    )
}