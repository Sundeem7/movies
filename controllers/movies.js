/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `moviesApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const moviesApi = require('../models/movies.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const moviesRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

// get all movieTitles
moviesRouter.get("/movies", function (req, res) {
  moviesApi.getAllMovie()
    .then((allMovies) => {
      res.render("movieTitles/allMovieTitles", {allMovies})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// actually create new movie
moviesRouter.post("/movies", function (req, res) {
  moviesApi.addMovie(req.body)
  .then(() => {
    res.redirect("/movies")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

// create new movies route
moviesRouter.get("/movies/new", function (req, res) {
  moviesApi.addMovie(req.params.moviesId)
    .then((getMovie) => {
      res.send({getMovie})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// render createForm
moviesRouter.get("/movies/add", function (req, res) { 
    res.render("movieTitles/createMovieTitles", {
    })
})

// get one company by moviesId
moviesRouter.get("/movies/:moviesId", function (req, res) {
  moviesApi.getOneMovie(req.params.moviesId)
    .then((moviesFromDb) => {
      res.render("movieTitles/oneMovieTitle", {_id: req.params.moviesId, moviesFromDb})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

moviesRouter.put("/movies/:moviesId", function (req, res) {
  moviesApi.updateMovie(req.params.moviesId, req.body)
  .then(() => {
    res.redirect("/movies")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

moviesRouter.delete("/movies/:moviesId", function (req, res) {
  moviesApi.deleteMovie(req.params.moviesId)
  .then(() => {
    res.redirect("/movies") //redirects to "/", can use any url, etc.
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
  moviesRouter
}
