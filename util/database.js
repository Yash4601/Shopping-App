const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://YashAgrawal:28uZXb8zHaElxUQa@cluster0.gxlzm.mongodb.net/shop?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true}
        )
        .then(client => {
            console.log('Database Connected!');
            _db = client.db();
            callback(client);
        })
        .catch(err => console.log(err))
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No Database Found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;