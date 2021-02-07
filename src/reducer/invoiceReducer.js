import {
  INVOICE_FETCH_INITIATED,
  INVOICE_FETCH_SUCCESS,
  INVOICE_FETCH_FAILED,
} from '../Types/invoiceType';

const initialState = {
  status: '',
  invoices: [],
};
const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVOICE_FETCH_INITIATED:
      return {
        ...state,
        status: 'loading',
        invoices: [],
      };
    case INVOICE_FETCH_SUCCESS:
      return {
        ...state,
        status: 'success',
        invoices: [...state.invoices, ...action.invoices],
      };

    case INVOICE_FETCH_FAILED:
      return {
        ...state,
        status: 'error',
        invoices: [],
      };
    default:
      return state;
  }
};

export default invoiceReducer;
