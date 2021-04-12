export const getParamsFromSearch = (search: string) => {
  return Object.fromEntries(decodeURI(search).replace('?', '').split('&').map((str) => str.split('=')));
}
