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
// global.SagaModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const sagaSchema = mongoose.Schema({
  franchiseName: String,
  numberInFranchise: Number,
  totalRevenue: Number,
  totalBudget: Number
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const sagaCollection = mongoose.model('sagas', sagaSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// READ/ get
const getAllSaga = () => {
  return sagaCollection.find();
}

const getOneSaga = (sagaId) => {
  return sagaCollection.findById(sagaId)
}

// CREATE/ post
const addSaga = (newSaga) => {
  return sagaCollection.create(newSaga)
}

// UPDATE/ edit
const updateSaga = (sagaId, updatedSaga) => {
  return sagaCollection.updateOne({_id: sagaId, updatedSaga})
}

// DELETE
const deleteSaga = (sagaId) => {
  return sagaCollection.findByIdAndDelete(sagaId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addSaga,
  deleteSaga,
  getAllSaga,
  getOneSaga,
  updateSaga
}
