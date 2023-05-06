// const mongoose = require('mongoose');
import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  }
})

// module.exports = mongoose.model('Data', dataSchema)
const Model = mongoose.model('Data', dataSchema)
export { Model };
