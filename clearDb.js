const save = require('./save');

save({users: {}});
module.exports = () => {
  save({users: {}});
};