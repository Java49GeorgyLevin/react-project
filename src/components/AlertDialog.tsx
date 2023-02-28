import React, { ReactNode } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogType } from '../model/DialogType';

export const AlertDialog: React.FC<DialogType> = ({msg, foo}) => {
console.log('Dialog');
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
   
  };

    return    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Do you really want'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={foo} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
}