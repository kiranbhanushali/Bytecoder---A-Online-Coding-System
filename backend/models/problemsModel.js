const mongoose = require("mongoose");
const { Schema } = mongoose;
const problemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  category: [{ type: String }],
  markdown: {
    type: String,
    required: true,
  },
  meta: {
    totalSubmission: { type: Number, default: 0 },
    submissions: { type: Number, default: 0 },
  },
  input: [{ type: String, required: true }],
  output: [{ type: String, required: true }],
});

module.exports = mongoose.model("ProblemModel", problemSchema);
