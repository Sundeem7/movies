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
// global.TvShowsModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */

const tvShowsSchema = mongoose.Schema({
  nameOfTvShow: String,
  network: String,
  tvShowReview: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const tvShowsCollection = mongoose.model("tvShows", tvShowsSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// READ/ get
const getAllTvShows = () => {
  return tvShowsCollection.find();
}

const getOneTvShows = (tvShowsId) => {
  return tvShowsCollection.findById(tvShowsId)
}

// CREATE/ post
const addTvShows = (newTvShows) => {
  return tvShowsCollection.create(newTvShows)
}

// UPDATE/ edit
const updateTvShows = (tvShowsId, updatedTvShows) => {
  return tvShowsCollection.updateOne({_id: tvShowsId}, updatedTvShows)
}

// DELETE
const deleteTvShows = (tvShowsId) => {
  return tvShowsCollection.findByIdAndDelete(tvShowsId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addTvShows,
  deleteTvShows,
  getAllTvShows,
  getOneTvShows,
  updateTvShows
}
