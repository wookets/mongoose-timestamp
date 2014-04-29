
module.exports = function(schema, options) {
  schema.add({createdOn: {type: Date, default: Date.now, required: true}});
  schema.add({updatedOn: {type: Date, default: Date.now, required: true}});
  schema.add({trashedOn: {type: Date}});
  schema.add({trashed: {type: Boolean, default: false, required: true}});
  schema.pre('save', function(next) {
    if (this.createdOn == null) {
      this.createdOn = new Date();
    }
    this.updatedOn = new Date();
    if (this.isModified('trashed')) {
      if (this.trashed) {
        this.trashedOn = new Date();
      } else {
        this.trashedOn = undefined;
      }
    }
    next();
  });
};