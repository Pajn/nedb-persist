export default function nedb(settings: {filename: string}|{inMemoryOnly: boolean}): {
  getItem(key, cb: Function),
  setItem(key, value, cb: Function),
  removeItem(key, cb: Function),
  getAllKeys(cb: Function),
};
