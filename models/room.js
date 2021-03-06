let mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        roomSchema = new Schema({
                name: {
                    type: String,
                    required: true,
                    unique: true,
                },
                label: {
                        type: String,
                        require: true,
                        unique: true
                },
                visiability: {
                    type: String,
                    enum: ['public', 'private'],
                    required: true
                },
                company: [{type: Schema.Types.ObjectId, ref: 'Company'}]
            }),
        Room =  mongoose.model('Room', roomSchema);

module.exports = Room;

