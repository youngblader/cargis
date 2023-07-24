export const phoneMasked = (str: string = '') => {
  return str
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d)/, '+$1 $2')
    .replace(/(\d{3})/, '($1) ')
    .replace(/(\d{3})(\d{2})/, '$1-$2-');
};
