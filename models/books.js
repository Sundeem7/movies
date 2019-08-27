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

const booksSchema = mongoose.Schema({
  name: String,
  author: String,
  review: String,
})



/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const booksCollection = mongoose.model('books', booksSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// READ/ get
const getAllBooks = () => {
  return booksCollection.find();
}

const getOneBooks = (productionId) => {
  return booksCollection.findById(productionId)
}

// CREATE/ post
const addBooks = (newProduction) => {
  return booksCollection.create(newProduction)
}

// UPDATE/ edit
const updateBooks = (productionId, updatedProduction) => {
  return booksCollection.updateOne({ _id: productionId }, updatedProduction)
}

// DELETE
const deleteBooks = (productionId) => {
  return booksCollection.findByIdAndDelete(productionId)
}



/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addBooks,
  deleteBooks,
  getAllBooks,
  getOneBooks,
  updateBooks
}
