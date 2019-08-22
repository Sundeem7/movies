/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `sagaApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const sagaApi = require('../models/saga.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const sagaRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

// get all companies
sagaRouter.get("/", function (req, res) {
  sagaApi.getAllProductionCo()
    .then((allProductions) => {
      res.render("companies/allCompany", { allProductions })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// get one company by productionId
sagaRouter.get("/:productionId", function (req, res) {
  sagaApi.getOneProductionCo(productionId)
    .then((productionCoFromDb) => {
      res.render("companies/oneCompany", { _id: productionId, productionCoFromDb })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// create new company
sagaRouter.get("/new", function (req, res) {
  sagaApi.addProductionCo(req.params.productionId)
    .then((getProductionCo) => {
      res.send({ getProductionCo })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// render createForm
sagaRouter.get("/add", function (req, res) {
  sagaApi.addProductionCo(req.params.productionId)
  .then(() => {
    res.render("companies/createCompanies", {})
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

sagaRouter.post("/", function (req, res) {
  sagaApi.addProductionCo(req.body)
  .then(() => {
    res.redirect("/")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

sagaRouter.put("/:productionId", function (req, res) {
  sagaApi.updateProductionCo(req.params.productionId, req.body)
  .then(() => {
    res.redirect("/")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

sagaRouter.delete("/:productionId", function (req, res) {
  sagaApi.deleteProductionCo(req.params.productionId)
  .then(() => {
    res.redirect("/") //redirects to "/", can use any url, etc.
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  sagaRouter
}
