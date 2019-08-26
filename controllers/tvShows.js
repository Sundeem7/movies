/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `seriesApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const tvShowsApi = require('../models/tvShows.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const tvShowsRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

// get all tvShows
tvShowsRouter.get("/tvShows", function (req, res) {
  tvShowsApi.getAllTvShows()
    .then((alltvShows) => {
      res.render("/tvShowTitles/allTvShowTitles", {alltvShows})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// actually create new tvShows
tvShowsRouter.post("/tvShows", function (req, res) {
  tvShowsApi.addTvShows(req.body)
  .then(() => {
    res.redirect("/tvShows")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})



// create new tvShows route
tvShowsRouter.get("/tvShows/new", function (req, res) {
  tvShowsApi.addTvShows(req.params.tvShowsId)
    .then((getTvShows) => {
      res.send({getTvShows})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

// render createForm
tvShowsRouter.get("/tvShows/add", function (req, res) {
    res.render("/tvShowTitles/createTvShow", {
    })
})

// get one company by tvShowsId
tvShowsRouter.get("/tvShows/:tvShowsId", function (req, res) {
  tvShowsApi.getOneTvShows(req.params.tvShowsId)
    .then((tvShowsFromDb) => {
      res.render("/tvShowTitles/oneTvShow", {_id: req.params.tvShowsId, tvShowsFromDb})
    })
    .catch((error) => {
      console.log(error) //will show error in console
    })
})

tvShowsRouter.put("/tvShows/:tvShowsId", function (req, res) {
  tvShowsApi.updateTvShows(req.params.tvShowsId, req.body)
  .then(() => {
    res.redirect("/tvShows")
  })
  .catch((error) => {
    console.log(error) //will show error in console
  })
})

tvShowsRouter.delete("/tvShows/:tvShowsId", function (req, res) {
  tvShowsApi.deleteTvShows(req.params.tvShowsId)
  .then(() => {
    res.redirect("/tvShows") //redirects to "/", can use any url, etc.
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
  tvShowsRouter
}
