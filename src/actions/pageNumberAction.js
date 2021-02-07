import { PAGE_NUMBER, ROW_SELECTED_COUNT } from '../Types/invoiceType';

export const changePageNumber = (pageNumber, pageSize) => ({
  type: PAGE_NUMBER,
  pageNumber,
  pageSize,
});

export const rowsSelectedAction = (rows) => ({
  type: ROW_SELECTED_COUNT,
  rows,
});
