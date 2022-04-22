const axios = require("axios").default


function api() {
    return axios.create({
        baseURL: process.env.BASE_URL
    })
}

module.exports.getPages = async function() {
    return await api().get("/pages")
}

module.exports.getPosts = async function() {
    return await api().get("/posts")
}

// -------- Caching --------

