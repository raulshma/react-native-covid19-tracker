const GLOBALDATA_URL = 'https://disease.sh/v3/covid-19/all';
export const COUNTRY_URL = (name: string) =>
  `https://disease.sh/v3/covid-19/countries/${name}?strict=true&allowNull=true`;

export const APP_COLORS = {
  CONFIRMED: '#FF5050',
  RECOVERED: '#21CF55',
  DECEASED: '#0E3360',
  ACTIVE: '#378FB3',
};

export const MONTHS: any = {
  1: 'January',
  2: 'Feburary',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};
export default GLOBALDATA_URL;
