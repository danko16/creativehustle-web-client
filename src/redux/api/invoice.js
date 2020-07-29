import { Api } from '../../utils/api';

export default Object.freeze({
  invoices: () => Api.get(`/invoice`),
  invoice: ({ invoice_id }) => Api.get(`/invoice/${invoice_id}`),
  add: (payload) =>
    Api.post('/invoice', payload, { headers: { 'Content-Type': 'application/json' } }),
  confirm: ({ payload, formData }) =>
    Api.post('/invoice/confirm', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      params: payload,
    }),
});
