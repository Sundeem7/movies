/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
// global.productionModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const movieSchema = mongoose.Schema({
  nameOfMovie: String,
  numberInFranchise: Number,
  totalRevenue: Number,
  releaseDate: Number
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const moviesCollection = mongoose.model('movie', movieSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// READ/ get
const getAllMovie = () => {
  return moviesCollection.find();
}

const getOneMovie = (moviesId) => {
  return moviesCollection.findById(moviesId)
}

// CREATE/ post
const addMovie = (newMovie) => {
  return moviesCollection.create(newMovie)
}

// UPDATE/ edit
const updateMovie = (moviesId, updatedMovie) => {
  return moviesCollection.updateOne({_id: moviesId}, updatedMovie)
}

// DELETE
const deleteMovie = (moviesId) => {
  return moviesCollection.findByIdAndDelete(moviesId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addMovie,
  deleteMovie,
  getAllMovie,
  getOneMovie,
  updateMovie
}
