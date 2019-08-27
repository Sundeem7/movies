/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `booksApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const booksApi = require("../models/books.js")
// const seriesApi = require("../models/series.js")
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const booksRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */


// get all companies
booksRouter.get("/books", function (req, res) {
  booksApi.getAllBooks()
    .then((allBooks) => {
      res.render("bookTitles/allBooks", {allBooks})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// actually create new books
booksRouter.post("/books", function (req, res) {
  booksApi.addBooks(req.body)
  .then(() => {
    res.redirect("/books")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

// create new company route
booksRouter.get("/books/new", function (req, res) {
  booksApi.addBooks(req.params.booksId)
    .then((getBooks) => {
      res.send({getBooks})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// render createForm
booksRouter.get("/books/add", function (req, res) {
  res.render("bookTitles/createBookTitles", {})
})

// get one company by booksId
booksRouter.get("/books/:booksId", function (req, res) {
  booksApi.getOneBooks(req.params.booksId)
    .then((booksFromDb) => {
      res.render("bookTitles/oneBook", { _id: req.params.booksId, booksFromDb })
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})



booksRouter.put("/books/:booksId", function (req, res) {
  booksApi.updateBooks(req.params.booksId, req.body)
  .then(() => {
    res.redirect("/books")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

booksRouter.delete("/books/:booksId", function (req, res) {
  booksApi.deleteBooks(req.params.booksId)
  .then(() => {
    res.redirect("/books") //redirects to "/", can use any url, etc.
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
  booksRouter
}
