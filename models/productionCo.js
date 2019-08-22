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
const productionCoSchema = mongoose.Schema({
  name: String,
  revenue: Number,
  amusementPark: Boolean
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const productionCoCollection = mongoose.model('productionCo', productionCoSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// READ/ get
const getAllProductionCo = () => {
  return productionCoCollection.find();
}

const getOneProductionCo = (productionId) => {
  return productionCoCollection.findById(productionId)
}

// CREATE/ post
const addProductionCo = (newProduction) => {
  return productionCoCollection.create(newProduction)
}

// UPDATE/ edit
const updateProductionCo = (productionId, updatedProduction) => {
  return productionCoCollection.updateOne({_id: productionId}, updatedProduction)
}

// DELETE
const deleteProductionCo = (productionId) => {
  return productionCoCollection.findByIdAndDelete(productionId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addProductionCo,
  deleteProductionCo,
  getAllProductionCo,
  getOneProductionCo,
  updateProductionCo
}
