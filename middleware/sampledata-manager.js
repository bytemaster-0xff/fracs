var repo = require('../storage/repo');

module.exports = {
    generateTeams: function() {

    },

    generateInventory: function() {

    },

    generateSites: function() {
        console.log('generating now')
        
        return new Promise((resolve, reject) => {
            console.log('now I am hre')
           resolve('Added 20 sites'); 
        }); 
    },

    getTeams :function() {
        return new Promise((resolve, reject) => {
            repo.getAll('users')
            .then(users => {
                resolve(users);
            }) ;
        });
    },

    deleteAll: function() {

    }
};
