export const useFormateDate = (date: Date) => {
    let dataObj = new Date(date);
    let dataFormatada = dataObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return dataFormatada
}