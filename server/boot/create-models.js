var async = require('async');

module.exports = function(app) {

  // data sources
  var mongoDs = app.dataSources.mongoDs;

  // create all models
  async.parallel({
    models: async.apply(createModel)
  }, function(err, results) {
    if (err) throw err;

  });

  function createModel(cb) {

    mongoDs.automigrate('MyModel', function(err) {
      if (err) return cb(err);

      app.models.MyModel.create([
        { id: "57cdc397ad843c0dd76a9131", Name: "John", LastName:"Foo", Age: 30},
        { id: "57cdc397ad843c0dd76a9132", Name: "Jane", LastName:"Bar", Age: 34}
      ], cb);
    });
  }

};
