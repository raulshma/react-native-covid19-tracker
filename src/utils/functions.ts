import numeral from 'numeral';
export const fNum = (num: number | any) => {
  if (isNaN(Number(num))) {
    return num;
  }
  return numeral(num).format('0,0');
};
