const express = require("express");
const app = express()
// console.dir(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on : ${port}`);
})

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    // console.log(req.params);
    let htmlStr = `<h1> Welcome of the page of @${username}${id}</h1> `;   
    res.send(htmlStr)
})


app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    res.send(`result of query : ${q}`)
})