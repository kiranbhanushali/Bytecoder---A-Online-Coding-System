const mongoose = require('mongoose')
const { Schema } = mongoose

const submissionSchema = new Schema({
    username: {
        type: String,
        required: [true, 'No user id found'],
    },
    result: {
        verdict: String,
        total_tc: Number,
        passed_tc: Number,
    },
    problemcode: {
        type: String,
        required: [true, 'No user id found'],
    },
})

module.exports = mongoose.model('SubmissionModel', submissionSchema)
