import Datastore from 'nedb'

export default function nedb(db: Datastore): {
  getItem(key, cb: (err: any, value: any) => any),
  setItem(key, value, cb: (err: any) => any),
  removeItem(key, cb: (err: any) => any),
  getAllKeys(cb: (err: any) => any),
};
