import React from 'react';
import clsx from 'clsx';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  withStyles,
  Typography,
  TableContainer,
  TableBody,
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { pxToRem } from './../utils/theme';
import { dateFormatter } from './../utils/dateHelper';
import InfiniteScroll from 'react-infinite-scroller';
import CircularLoader from './CircularLoader';
import {
  rowsSelectedAction,
  changePageNumber,
} from '../actions/pageNumberAction';

import { invoiceAnalyticsDataInitiated } from '../actions/invoiceActions';

const useStyles = makeStyles((theme) => ({
  tableConatiner: {
    width: '100%',
    height: '80%',
    flexGrow: 1,
    overflowY: 'auto',
    userSelect: 'text',
  },
  tableHeaderCell: {
    padding: `${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(
      56
    )} ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(28)}`,
    lineHeight: 'inherit',
    '&:last-child': {
      paddingRight: theme.typography.pxToRem(25),
    },
  },
  tableBodyCell: {
    padding: `${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(
      56
    )} ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(28)}`,
    '&:last-child': {
      paddingRight: theme.typography.pxToRem(25),
    },
  },
  tableCellPaddingNone: { padding: 0 },
  tableCellPaddingCheckbox: {
    padding: `0px ${theme.typography.pxToRem(8)} 0px ${theme.typography.pxToRem(
      8
    )}`,
  },
  headerColumnTitle: {
    fontSize: theme.typography.pxToRem(18),
    color: '#9CA4AF',
  },
  cellTxt: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: pxToRem(18),
  },
  tablecell: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '6rem',
    alignItems: 'center',
  },
  cellCheckBox: {
    position: 'relative',
  },
  tablecellNotes: {
    display: 'flex',
    justifyContent: 'center',
    width: '6.5rem',
    alignItems: 'center',
  },
  bodyOfTbl: {
    position: 'relative',
    height: '60vh',
  },
  sortIconDiv: {
    position: 'relative',
    left: '5vw',
    top: '-2vh',
  },
}));
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#273D49BF',
    },
  },
  disabled: {
    backgroundColor: 'transparent',
  },
}))(TableRow);

const camelCaseToSentence = (str) => {
  const result = str.replace(/([A-Z])/g, ' $1');

  const final = result.charAt(0).toUpperCase() + result.slice(1);
  return final;
};

function InvoiceTable() {
  const tabledata = useSelector((state) => state.invoiceReducer.invoices);

  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);

  const [hasMore, sethasMore] = React.useState(true);
  const dispatch = useDispatch();

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tabledata && tabledata.map((n) => n.customerNumber);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, number) => {
    const selectedIndex = selected.indexOf(number);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, number);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const isSelected = (number) => selected.indexOf(number) !== -1;

  const numSelected = selected.length;
  console.log('selected count:', numSelected);
  dispatch(rowsSelectedAction(numSelected));
  let keys = [];
  if (tabledata) {
    for (let head in tabledata[0]) {
      keys.push(head);
    }
  }
  const pageNumber = useSelector((state) => state.pageReducer.pageNumber);

  function handlePageNumber() {
    console.log('handle page called');
    dispatch(changePageNumber(pageNumber + 1, 20));
  }

  React.useEffect(() => {
    if (tabledata.length >= 1000) {
      sethasMore(false);
    }
  }, [tabledata]);
  React.useEffect(() => {
    dispatch(invoiceAnalyticsDataInitiated(pageNumber));
  }, []);
  return (
    <TableContainer className={classes.tableConatiner}>
      <Table stickyHeader aria-label='invoice-table'>
        <TableHead>
          <TableRow>
            <TableCell
              classes={{
                root: clsx(
                  classes.tableHeaderCell,
                  classes.tableCellPaddingNone
                ),
              }}
            >
              <Checkbox
                indeterminate={
                  numSelected > 0 && numSelected < tabledata.length
                }
                checked={
                  tabledata.length > 0 && numSelected === tabledata.length
                }
                onChange={handleSelectAllClick}
              />
            </TableCell>
            {keys.map((tableHeader) => (
              <TableCell
                align='left'
                className={classes.headerColumnTitle}
                classes={{
                  root: clsx(classes.tableBodyCell, {
                    [classes.tableCellPaddingCheckbox]:
                      tableHeader?.disablePadding,
                  }),
                }}
              >
                {camelCaseToSentence(tableHeader)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* <InfiniteScroll
          dataLength={tabledata.length}
          loadMore={() => {
            console.log('next');
          }}
          style={{ display: 'flex', flexDirection: 'column' }}
          hasMore={hasMore}
          loader={<CircularLoader />}
        > */}
        <TableBody>
          {tabledata &&
            tabledata.map((data, index) => {
              const isItemSelected = isSelected(data.customerNumber);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <StyledTableRow
                  onClick={(event) => handleClick(event, data.customerNumber)}
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={data.customerNumber}
                  selected={isItemSelected}
                >
                  <TableCell
                    padding='checkbox'
                    className={classes.cellCheckBox}
                  >
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  <TableCell scope='row' padding='none'>
                    <div className={classes.tablecell}>
                      <Typography className={classes.cellTxt}>
                        {' '}
                        {data && data.customerName}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell
                    component='th'
                    id={labelId}
                    scope='row'
                    padding='none'
                  >
                    <div className={classes.tablecell}>
                      <Typography className={classes.cellTxt}>
                        {' '}
                        {data ? data.customerNumber : ' '}
                      </Typography>
                    </div>
                  </TableCell>

                  <TableCell scope='row' padding='none'>
                    <div className={classes.tablecell}>
                      <Typography className={classes.cellTxt}>
                        {' '}
                        {data ? data.invoiceNumber : ' '}
                      </Typography>
                    </div>
                  </TableCell>

                  <TableCell scope='row' padding='none'>
                    <div className={classes.tablecell}>
                      <Typography className={classes.cellTxt}>
                        {' '}
                        {data ? data.invoiceAmount : ' '}
                      </Typography>
                    </div>
                  </TableCell>

                  <TableCell scope='row' padding='none'>
                    <div className={classes.tablecell}>
                      <Typography className={classes.cellTxt}>
                        {' '}
                        {data ? dateFormatter(data.dueDate) : ' '}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell scope='row' padding='none'>
                    <div className={classes.tablecellNotes}>
                      <Typography className={classes.cellTxt}>
                        {' '}
                        {data ? data.notes : ' '}
                      </Typography>
                    </div>
                  </TableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
        {/* </InfiniteScroll> */}
      </Table>
    </TableContainer>
  );
}

export default InvoiceTable;
