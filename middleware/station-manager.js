var config = require('../config');
var Promise = require('promise').Promise

var engine = require('tingodb')();

let db = new engine.Db(config.localDb, {});

module.exports = {
    getStations :function() {
        return new Promise((resolve, reject) => {
            var collection = db.collection("users");
            collection.find({}).toArray(function(err, users) {
                resolve(users);
            });
        });
    }
};
