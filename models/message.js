var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: String, required: true},
    songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

module.exports = mongoose.model('Message', messageSchema);
