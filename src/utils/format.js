export function convertStatus(status) {
  switch (status) {
    case 'unpaid':
      return 'Belum Terbayar';
    case 'paid':
      return 'Lunas';
    case 'pending':
      return 'Menunggu Konfirmasi';
    case 'canceled':
      return 'di Batalkan';
    default:
      return 'Menunggu Konfirmasi';
  }
}

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
