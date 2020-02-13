var mongoose = require('mongoose');  
var DummySchema = new mongoose.Schema({  
  Name: String,
  LastName: String
});
mongoose.model('Dummy', DummySchema);
module.exports = mongoose.model('Dummy');