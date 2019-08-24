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
moviesRouter.get(":productionId/series/:seriedId/movies", function (req, res) {
  moviesApi.getAllMovie()
    .then((allMovies) => {
      res.render("movieTitles/allMovieTitles", {allMovies})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})



// create new company
moviesRouter.get("/:productionId/series/:seriedId/moviesnew", function (req, res) {
  moviesApi.addMovie(req.params.moviesId)
    .then((getMovie) => {
      res.send({getMovie})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// render createForm
moviesRouter.get("/:productionId/series/:seriedId/moviesadd", function (req, res) { 
    res.render("movieTitles/createMovieTitles", {
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// get one company by moviesId
moviesRouter.get("/:productionId/series/:seriedId/movies:moviesId", function (req, res) {
  moviesApi.getOneMovie(req.params.moviesId)
    .then((moviesFromDb) => {
      res.render("movieTitles/oneMovieTitle", {_id: req.params.moviesId, moviesFromDb})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

moviesRouter.post("/:productionId/series/:seriedId/movies", function (req, res) {
  moviesApi.addMovie(req.body)
  .then(() => {
    res.redirect("/:productionId/series/:seriedId/movies")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

moviesRouter.put("/:productionId/series/:seriedId/movies:moviesId", function (req, res) {
  moviesApi.updateMovie(req.params.moviesId, req.body)
  .then(() => {
    res.redirect("/:productionId/series/:seriedId/movies")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

moviesRouter.delete("/:productionId/series/:seriedId/movies:moviesId", function (req, res) {
  moviesApi.deleteMovie(req.params.moviesId)
  .then(() => {
    res.redirect("/:productionId/series/:seriedId/movies") //redirects to "/", can use any url, etc.
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
