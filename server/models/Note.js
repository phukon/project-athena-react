const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-plugin-autoinc');


const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    text : [{
        type: String,
        required: true
    }],
    completed : {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
)

noteSchema.plugin(AutoIncrement.plugin, {model: 'note', field: 'ticketID', startAt: 300, incrementBy: 1});

module.exports = mongoose.model('Note', noteSchema);