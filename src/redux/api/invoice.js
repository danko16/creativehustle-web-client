import { Api } from '../../utils/api';

export default Object.freeze({
  invoice: ({ invoice_id }) => Api.get(`/invoice/${invoice_id}`),
  add: (payload) =>
    Api.post('/invoice', payload, { headers: { 'Content-Type': 'application/json' } }),
});
