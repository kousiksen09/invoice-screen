import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DoneIcon from '@material-ui/icons/Done';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Close } from '@material-ui/icons';
import { pxToRem, pxToVw } from './../utils/theme';

const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: "25% auto",
    width: '50%',
    height: '30%',
  },
  paperWidthSm: {
    maxWidth: pxToVw(600),
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reportTitle: {
    overflow: 'hidden',
    fontSize: pxToRem(32),
    color: theme.palette.text.primary,
    fontWeight: '700',
  },

  dialogContent: {
    display: 'flex',
    justifyContent: 'center',
    top: '5vh',
    position: 'relative',
  },
  buttonAction: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    top: '12vh',
  },
  iconBtn: {
    color: '#FFFFFF',
    borderRadius: '0.7rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'none',
    },
  },
  cancelBtn: {
    height: '2.4rem',
    width: '5.2rem',
    position: 'relative',
    border: '0.1rem solid #5DAAE0',
    backgroundColor: 'transparent',
    transition: 'background 500ms',
  },
  okBtn: {
    height: '2.4rem',
    width: '5.2rem',
    position: 'relative',
    left: '1vw',
    border: '0.1rem solid #5DAAE0',
    backgroundColor: '#3C637E',
    transition: 'background 500ms',
  },
}));
function AddInvoices(props) {
  const classes = useStyles();
  const { open, onClose, count } = props;
  return (
    <Dialog
      open={open && count > 0}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      classes={{ paper: classes.paper, paperWidthSm: classes.paperWidthSm }}
    >
      <DialogTitle
        id='alert-dialog-title'
        className={classes.dialogTitle}
        disableTypography
      >
        <Typography variant='h5'>Add Invoices</Typography>
      </DialogTitle>
      <DialogContent>
        <div className={classes.dialogContent}>
          <Typography className={classes.reportTitle}>
            {count} Invoices Added!
          </Typography>
        </div>

        <div className={classes.buttonAction}>
          <Button
            classes={{
              root: classes.iconBtn,
            }}
            className={classes.cancelBtn}
            startIcon={<Close />}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            classes={{
              root: classes.iconBtn,
            }}
            className={classes.okBtn}
            startIcon={<DoneIcon />}
            onClick={onClose}
          >
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddInvoices;
