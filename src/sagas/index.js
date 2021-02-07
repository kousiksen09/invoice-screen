import { all, fork } from 'redux-saga/effects';
import * as invoiceSaga from './InvoiceSaga';

export default function* rootSaga() {
  yield all([...Object.values(invoiceSaga)].map(fork));
}
