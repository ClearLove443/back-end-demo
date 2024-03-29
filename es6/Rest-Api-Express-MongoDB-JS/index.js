// require('dotenv').config();
// const cors = require('cors');
// const express = require('express');
// const mongoose = require('mongoose');
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config()

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());


// const routes = require('./routes/routes');
import { router } from "./routes/routes.js";

app.use('/api', router)

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
})