import Datastore from 'nedb';

export default function nedb(db) {
  return {
    getItem(key, cb) {
      db.findOne({key}, (err, doc) => {
        if (err) {
          cb(err);
        } else {
          cb(null, doc && doc.value);
        }
      });
    },

    setItem(key, value, cb) {
      db.update({key}, {key, value}, {upsert: true}, err => cb(err));
    },

    removeItem(key, cb) {
      db.remove({key}, err => cb(err));
    },

    getAllKeys(cb) {
      db.find({}, (err, docs) => {
        if (err) {
          cb(err);
        } else {
          cb(null, docs.map(doc => doc.key));
        }
      });
    },
  };
}
