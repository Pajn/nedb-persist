# nedb-persist

A storage engine for [redux-persist](https://github.com/rt2zz/redux-persist) that uses [NeDB](https://github.com/louischatriot/nedb).

## Usage
```js
import nedb from 'nedb-persist';

persistStore(store, {storage: nedb({filename: 'db.json'})});
```

The options object should either contain a filename property or an inMemoryOnly
property set to true to create an in memory database.
