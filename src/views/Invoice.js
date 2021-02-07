import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Header from '../component/Header';
import InvoiceContentArea from '../component/InvoiceContentArea';

function Invoice() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageReducer.pageNumber);

  return (
    <div>
      <Header />
      <InvoiceContentArea />
    </div>
  );
}

export default Invoice;
