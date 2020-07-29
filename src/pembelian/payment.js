import React, { useEffect } from 'react';

import RecentInvoice from './invoice';
import BankList from './bank-list';

function Payment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container pembayaran pb-5">
      <div className="row">
        <div className="col-lg-8 pl-0">
          <RecentInvoice />
        </div>
        <div className="col-lg-4">
          <BankList />
        </div>
      </div>
    </div>
  );
}

export default Payment;
