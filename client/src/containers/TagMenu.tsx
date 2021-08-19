import Button from '@material-ui/core/Button';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select} from "@material-ui/core";
import {TagMenuList} from "../components/TagMenuList";


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
                            <TagMenuList/>
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