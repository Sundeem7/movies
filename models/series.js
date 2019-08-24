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
// global.seriesModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const seriesSchema = mongoose.Schema({
  franchiseName: String,
  numberOfMovies: Number,
  totalRevenue: Number,
  totalBudget: Number,

  movies: [
    {
      type: Schema.Types.ObjectId, //calls the specific object type
      ref: "movies" //referencing file series
    }
  ]
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const seriesCollection = mongoose.model('series', seriesSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// READ/ get
const getAllSeries = () => {
  return seriesCollection.find();
}

const getOneSeries = (seriesId) => {
  return seriesCollection.findById(seriesId)
}

// CREATE/ post
const addSeries = (newSeries) => {
  return seriesCollection.create(newSeries)
}

// UPDATE/ edit
const updateSeries = (seriesId, updatedSeries) => {
  return seriesCollection.updateOne({_id: seriesId}, updatedSeries)
}

// DELETE
const deleteSeries = (seriesId) => {
  return seriesCollection.findByIdAndDelete(seriesId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addSeries,
  deleteSeries,
  getAllSeries,
  getOneSeries,
  updateSeries
}
