export const formateDate = (date: Date) => {
  const dataObj = new Date(date);
  const dataFormatada = dataObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return dataFormatada;
};
