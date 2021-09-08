import Button from '@material-ui/core/Button';
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select} from "@material-ui/core";
import {TagMenuList} from "../components/TagMenuList";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {thunkGetTags} from "../features/tags/thunkGetTags";
import {SelectorTag} from "../models/Tag";
import {setSelectorTags} from "../features/tagSelector/tagSelectorSlice";


const useStyles = makeStyles((theme) => ({
    dialog: {
        color: '#FFFFFF',
        flexGrow: 1,
        paddingLeft: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

export const TagMenu : React.FC = () => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const tags = useNamedSelector('tags')
    const tagSelector = useNamedSelector('tagsSelector')

    useEffect(() => {
            dispatch(thunkGetTags())
        },
        [dispatch]
    )

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { options } = event.target as HTMLSelectElement;
        const value: SelectorTag = {
            data: []
        };
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.data.push(...tags.data.filter(p => p.id.toString() == options[i].value));
            }
        }
        dispatch(setSelectorTags(value))
    };
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Button className={classes.dialog} onClick={handleClickOpen}> Теги </Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Выберите теги</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor="select-multiple-native">
                                Теги
                            </InputLabel>
                            <TagMenuList handleChange={handleChange} tagSelector={tagSelector} tags={tags}/>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ок
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}