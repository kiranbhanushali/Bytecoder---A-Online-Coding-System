const mongoose = require('mongoose');
const { Schema } = mongoose;



const submissionSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId, ref: 'users', required: [true, 'No user id found']
    },
    result: {
        total_tc: Number,
        passed_tc: Number
    },
    problem_id: {
        type: Schema.Types.ObjectId, ref: 'problemmodels', required: [true, 'No user id found']
    }
});

module.exports = mongoose.model("SubmissionModel", submissionSchema);
