var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema({
  picture: String,
  id: String,
  name: String,
  description: String

  // title: { type: String, required: true },
  // releaseDate: Date,
  // comments: [CommentSchema],
});

var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
