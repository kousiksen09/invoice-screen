import { put, takeLatest, call, delay } from 'redux-saga/effects';
import {
  invoiceAnalyticsDataSuccess,
  invoiceAnalyticsDataFailed,
} from '../../actions/invoiceActions';
import { axios_instance as axiosInstance } from '../../utils/NetworkUtils';

function fetchInvoice(pageNumber) {
  let url = `http://localhost:4000/getInvoices.do`;
  if (pageNumber !== undefined) {
    url = `${url}?pageNumber=${pageNumber}&pageSize=20`;
  }
  return axiosInstance.post(url);
}
function* handleInvoiceAnalyticsAPIStart(action) {
  console.log('action in saga:', action);
  try {
    const response = yield call(fetchInvoice, action.pageNumber);

    yield delay(500);
    if (response.status === 200) {
      yield put(invoiceAnalyticsDataSuccess(response.data));
    } else {
      return 'Something Went Wrong. Please Retry';
    }
  } catch (error) {
    console.log(error);
    yield put(invoiceAnalyticsDataFailed());
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchForInvoiceAnalyticsAPIStart() {
  yield takeLatest('INVOICE_FETCH_INITIATED', (action) =>
    handleInvoiceAnalyticsAPIStart(action)
  );
}
