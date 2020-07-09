export const month = Object.freeze({
  '01': 'Januari',
  '02': 'Febuari',
  '03': 'Maret',
  '04': 'April',
  '05': 'Mei',
  '06': 'Juni',
  '07': 'Juli',
  '08': 'Agustus',
  '09': 'September',
  '10': 'Oktober',
  '11': 'November',
  '12': 'Desember',
});

export function convertDate(stringDate) {
  let date = stringDate.split('-');
  return `${date[0]} ${month[date[1]]} ${date[2]}`;
}
