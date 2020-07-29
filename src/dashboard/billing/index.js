import React from 'react';
import { useParams } from 'react-router-dom';
import Invoice from '../../shared/invoice';
import './billing-detail.css';

function BillingDetail() {
  const { invoiceId } = useParams();
  return (
    <div className="dashboard-main">
      <div className="invoice-wrapper">
        <Invoice invoiceId={parseInt(invoiceId)} mode="detail" />
      </div>
    </div>
  );
}

export default BillingDetail;
