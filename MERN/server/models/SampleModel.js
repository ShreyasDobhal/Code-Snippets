const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SampleModelSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    }
});

module.exports = SampleModel = mongoose.model('sampleModel',SampleModelSchema);
