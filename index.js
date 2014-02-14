
module.exports = function(schema, options) {
  schema.add({createdOn: {type: Date, default: Date.now, required: true}});
  schema.add({modifiedOn: {type: Date, default: Date.now, required: true}});
  schema.pre('save', function(next) {
    if (this.createdOn == null) {
      this.createdOn = new Date();
    }
    this.modifiedOn = new Date();
    next();
  });
}