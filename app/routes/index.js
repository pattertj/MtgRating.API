const ratingRoutes = require('./rating_routes');

module.exports = function (app, db) {
  ratingRoutes(app, db);
  // Other route groups could go here, in the future
};