import React from 'react';

import Invoice from './invoice';
import BankList from './bank-list';

function Payment() {
  return (
    <div className="container pembayaran py-5">
      <div className="row">
        <div className="col-lg-8 pl-0">
          <Invoice />
        </div>
        <div className="col-lg-4">
          <BankList />
        </div>
      </div>
    </div>
  );
}

export default Payment;
