import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";

export const imgList = [
    {
        link: './assets/images/avatars/avatar_1.jpg'
    },
    {
        link: './assets/images/avatars/avatar_2.jpg'
    },
    {
        link: './assets/images/avatars/avatar_3.jpg'
    },
]


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Choose an avatar</DialogTitle>

            <ImageList disableGutters>
                {imgList.map((idx) => (
                    <ImageListItem key={idx.link} onClick={() => handleListItemClick(imgList)} />
                ))}
            </ImageList>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(imgList[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Typography variant="subtitle1" component="div">
                Selected: {selectedValue}
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
                Choose avatar for account
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}