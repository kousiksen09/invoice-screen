import {
  INVOICE_FETCH_INITIATED,
  INVOICE_FETCH_SUCCESS,
  INVOICE_FETCH_FAILED,
} from '../Types/invoiceType';

export const invoiceAnalyticsDataInitiated = (pageNumber) => ({
  type: INVOICE_FETCH_INITIATED,
  pageNumber,
});
export const invoiceAnalyticsDataSuccess = (invoices) => ({
  type: INVOICE_FETCH_SUCCESS,
  invoices,
});
export const invoiceAnalyticsDataFailed = (invoices) => ({
  type: INVOICE_FETCH_FAILED,
  invoices,
});
