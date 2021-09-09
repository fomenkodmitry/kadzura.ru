﻿import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {useHistory} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {Button} from "@material-ui/core";
import {ArticlePaged} from "../models/Article";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            width: '70%',
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

type Props = { list: ArticlePaged, onPageChange: any, page: number };

export const ArticleList: React.FC<Props> = (props) => {
    const classes = useStyles();
    
    const history = useHistory();
    const toLink = (link: string) => {
        history.push(link);
    };
    
    return (
        <List style={{justifyContent: 'center'}}>
            <InfiniteScroll
                dataLength={props.list.data.length}
                next={props.onPageChange}
                hasMore={props.page !== props.list.totalPage}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Всё :(</b>
                    </p>
                }
                className={classes.infinityScroll}
            >
                {
                    props.list?.data?.map(({id, title, text, tags}) => {
                        return (
                            <>
                                <ListItem className={classes.listItem} alignItems="center" key={id}>
                                    <ListItemText
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
                                                <br/>
                                                {text.replace(/(<([^>]+)>)/gi, "").substring(0, 400)}
                                                <br/>
                                                <Button onClick={() => toLink("/article/" + id)}>
                                                    Читать
                                                </Button>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider className={classes.divider} light/>
                            </>
                        )
                    })
                }
            </InfiniteScroll>
        </List>
    )
}