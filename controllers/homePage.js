const express = require('express')

const homePageRouter = express.Router()

homePageRouter.get("/", function (req, res) {
    res.render("homePage")
})

module.exports = {
    homePageRouter
}