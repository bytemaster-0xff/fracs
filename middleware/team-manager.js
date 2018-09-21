var repo = require('../storage/repo');

module.exports = {
    getTeams :function() {
        return new Promise((resolve, reject) => {
            repo.getAll('users')
            .then(users => {
                resolve(users);
            }) ;
        });
    }
};
