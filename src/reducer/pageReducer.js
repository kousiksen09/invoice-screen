import { PAGE_NUMBER, ROW_SELECTED_COUNT } from '../Types/invoiceType';

const initialState = {
  pageNumber: 1,
  pageSize: 20,
  rows: 0,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.pageNumber,
        pageSize: action.pageSize,
      };
    case ROW_SELECTED_COUNT:
      return {
        ...state,
        rows: action.rows,
      };
    default:
      return state;
  }
};
export default pageReducer;
