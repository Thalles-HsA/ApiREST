import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://ThallesHsA:Thalles2017@cluster0.rj644cv.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;