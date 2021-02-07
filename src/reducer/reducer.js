import { combineReducers } from 'redux';
import invoiceReducer from './invoiceReducer';
import pageReducer from './pageReducer';

const reducer = combineReducers({
  invoiceReducer,
  pageReducer,
});
export default reducer;
