declare module 'nedb-persist' {
  export default function nedb(settings: {filename: string}|{inMemoryOnly: boolean}): {
    getItem(key, cb),
    setItem(key, value, cb),
    removeItem(key, cb),
    getAllKeys(cb),
  };
}
