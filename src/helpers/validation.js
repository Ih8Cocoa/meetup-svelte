export const isEmpty = (str) => str.trim().length === 0;

export const isEmail = (str) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str) === true;