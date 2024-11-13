const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://rajkumarpogula22:Raju12345@in-aws.59ion.mongodb.net/max-store?retryWrites=true&w=majority&appName=in-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')