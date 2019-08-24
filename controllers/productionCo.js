/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `productionApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const productionApi = require("../models/productionCo.js")
const seriesApi = require("../models/series.js")
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const productionCoRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

// get all companies
productionCoRouter.get("/", function (req, res) {
  productionApi.getAllProductionCo().populate("series") //populate production co with series
    .then((allProductions) => {
      res.render("companies/allCompany", {allProductions})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// actually create new productionCo
productionCoRouter.post("/", function (req, res) {
  productionApi.addProductionCo(req.body)
  .then(() => {
    res.redirect("/")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

// create new company route
productionCoRouter.get("/new", function (req, res) {
  productionApi.addProductionCo(req.params.productionId)
    .then((getProductionCo) => {
      res.send({getProductionCo})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// render createForm
productionCoRouter.get("/add", function (req, res) {
  res.render("companies/createCompanies", {})
})

// get one company by productionId
productionCoRouter.get("/:productionId", function (req, res) {
  productionApi.getOneProductionCo(req.params.productionId)
    .then((productionCoFromDb) => {
      res.render("companies/oneCompany", { _id: req.params.productionId, productionCoFromDb })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})



productionCoRouter.put("/:productionId", function (req, res) {
  productionApi.updateProductionCo(req.params.productionId, req.body)
  .then(() => {
    res.redirect("/")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

productionCoRouter.delete("/:productionId", function (req, res) {
  productionApi.deleteProductionCo(req.params.productionId)
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
  productionCoRouter
}
