import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  IconButton,
} from '@material-ui/core';
import { pxToRem, pxToVh } from '../utils/theme';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import InvoiceTable from './InvoiceTable';
import AddInvoices from './AddInvoices';

import { useSelector } from 'react-redux';
import CircularLoader from './CircularLoader';

const useStyles = makeStyles((theme) => ({
  invoiceListMain: {
    position: 'relative',
    height: '90vh',
    flexGrow: 1,
    boxSizing: 'border-box',
  },
  headerTextClass: {
    color: '#FFFFFF',
    fontSize: theme.typography.pxToRem(35),
  },
  genericContent: {
    position: 'relative',
    top: '2vh',
    height: `calc(100% - ${theme.typography.pxToVh(
      14
    )} - ${theme.typography.pxToVh(40)})`,
  },
  paper: {
    boxSizing: 'border-box',

    height: '93%',
    width: '98%',
    padding: pxToRem(20),
    borderRadius: theme.typography.pxToRem(6),
    display: 'flex',
    flexDirection: 'column',
    // for firefox
    fallbacks: [{ minWidth: '-moz-available' }],
  },
  paperRoot: {
    background: '#273D49BF 0% 0% no-repeat padding-box',
    opacity: 1,
  },
  buttonArea: {
    position: 'relative',
    height: pxToVh(85),
    width: '100%',
  },
  predictBtn: {
    height: '2.4rem',
    width: '6rem',
    position: 'relative',
    backgroundColor: '#9CA4AF',
    transition: 'background 500ms',
  },
  createActionsDivDisabled: {
    fill: theme.palette.grey[100],
    color: `${theme.palette.grey[100]} !important`,
  },

  iconBtn: {
    color: '#FFFFFF',
    borderRadius: '0.7rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'none',
    },
  },
  corresPondenceBtn: {
    height: '2.4rem',
    width: '14rem',
    position: 'relative',
    left: '2vw',
    border: '0.1rem solid #5DAAE0',
    backgroundColor: 'transparent',
    transition: 'background 500ms',
  },
  addButton: {
    height: '2.4rem',
    width: '5.2rem',
    position: 'relative',
    left: '24vw',
    border: '0.1rem solid #5DAAE0',
    backgroundColor: 'transparent',
    transition: 'background 500ms',
  },
  editBtn: {
    height: '2.4rem',
    width: '5.2rem',
    position: 'relative',
    left: '26vw',
    border: '0.1rem solid #5DAAE0',
    backgroundColor: 'transparent',
    transition: 'background 500ms',
  },
  editDisabled: {
    color: `${theme.palette.grey[100]} !important`,
    border: '0.1rem solid #9CA4AF',
  },

  searchPanelRoot: {
    position: 'relative',
    left: '48vw',
    top: '-2.6vw',
    height: theme.typography.pxToRem(48),
    border: `${theme.border.standard.primary}`,
    opacity: 1,
    borderRadius: theme.typography.pxToRem(112),
    display: 'flex',
    boxSizing: 'border-box',
    minWidth: theme.typography.pxToRem(300),
    maxWidth: theme.typography.pxToRem(300),
    alignItems: 'center',
    paddingLeft: theme.typography.pxToRem(21),
    paddingRight: theme.typography.pxToRem(15),
  },
  searchIcon: {
    minHeight: theme.typography.pxToRem(30),
    minWidth: theme.typography.pxToRem(30),
    maxHeight: theme.typography.pxToRem(30),
    maxWidth: theme.typography.pxToRem(30),
    cursor: 'pointer',
  },
  searchTextField: {
    fontSize: theme.typography.pxToRem(20),
    color: '#FFFFFF80',
    width: theme.typography.pxToRem(234),
  },
  searchInput: {
    fontSize: theme.typography.pxToRem(20),
    color: '#FFFFFF',
    opacity: 0.5,
    '&::placeholder': {
      color: '#ffffff80',
      opacity: 1,
    },
  },
  startIconBtn: {
    position: 'relative',
    right: '0.2rem',
  },
}));

function InvoiceContentArea() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const rowsSelected = useSelector((state) => state.pageReducer.rows);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div className={classes.invoiceListMain}>
      <Typography className={classes.headerTextClass}>Invoice List</Typography>
      <div className={classes.genericContent}>
        <Paper className={classes.paper} classes={{ root: classes.paperRoot }}>
          <div className={classes.buttonArea}>
            <Grid container spacing={3}>
              <Grid item sm={4} lg={4} md={4} xl={4}>
                <Button
                  disabled
                  classes={{
                    root: classes.iconBtn,
                    disabled: classes.createActionsDivDisabled,
                  }}
                  className={classes.predictBtn}
                >
                  Predict
                </Button>
                <Button
                  classes={{
                    root: classes.iconBtn,
                  }}
                  className={classes.corresPondenceBtn}
                >
                  View Correspondence Button
                </Button>
              </Grid>
              <Grid item sm={8} lg={8} md={8} xl={8}>
                <IconButton
                  classes={{
                    root: classes.iconBtn,
                  }}
                  className={classes.addButton}
                  onClick={handleClickOpen}
                >
                  <AddIcon className={classes.startIconBtn} />
                  Add
                </IconButton>
                <AddInvoices
                  open={open}
                  onClose={handleClose}
                  count={rowsSelected}
                />
                <IconButton
                  disabled={rowsSelected === 0 || rowsSelected > 1}
                  classes={{
                    root: classes.iconBtn,
                    disabled: classes.editDisabled,
                  }}
                  className={classes.editBtn}
                >
                  <EditIcon className={classes.startIconBtn} />
                  Edit
                </IconButton>
                <IconButton
                  style={{ position: 'relative', left: '28vw' }}
                  disabled={rowsSelected === 0}
                  classes={{
                    root: classes.iconBtn,
                    disabled: classes.editDisabled,
                  }}
                  className={classes.editBtn}
                >
                  <DeleteIcon className={classes.startIconBtn} />
                  Delete
                </IconButton>

                <div className={classes.searchPanelRoot}>
                  <TextField
                    onChange={(event) => event.target.value}
                    autoComplete='off'
                    id='input-with-icon-textfield'
                    placeholder='Search by invoice number'
                    classes={{ root: classes.searchTextField }}
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        input: classes.searchInput,
                      },
                    }}
                  />

                  <SearchIcon
                    className={classes.searchIcon}
                    onClick={() =>
                      document
                        .getElementById('input-with-icon-textfield')
                        .focus()
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>

          <InvoiceTable />
        </Paper>
      </div>
    </div>
  );
}

export default InvoiceContentArea;
