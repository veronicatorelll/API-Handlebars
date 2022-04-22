const express = require("express")
const exphbs = require("express-handlebars")
const api = require("./wp-api.js")
require("dotenv").config()

const app = express()


app.engine("hbs", exphbs.engine({
  extname: ".hbs",
  defaultLayout: "main",
}))

app.set("view engine", "hbs")

app.use(express.static("public"))


app.get("/", (req, res) => {
  res.render("home")
 })

app.get("/pages", async (req, res) => {
    const getPagesResponse = await api.getPages()
    const pages = getPagesResponse.data
    res.render("pages", { pages })
})

app.get("/posts", async (req, res) => {
    const getPostsResponse = await api.getPosts()
    const posts = getPostsResponse.data
    res.render("posts", { posts })
  })

app.listen(8000, () => {
    console.log("http://localhost:8000")
})

