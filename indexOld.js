const express = require("express");
const app = express()
// console.dir(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on : ${port}`);
})
// app.use((req, res) => {
//     // console.log(`request recieved`);
//     // res.send("This is a basic response")
//     res.send("<h1>Fruits</h1> <ul><li>apple</li> <li>Orange</li> </ul>")
// })
 // get requets
    app.get("/", (req, res) => {
        res.send("you contacted default")
    })
    app.get("/apple", (req, res) => {
        res.send("you contacted apple")
    })
    app.get("/orange", (req, res) => {
        res.send("you contacted orange")
    })
    app.get("*", (req, res) => {
        res.send("This path is not exist")
    })
 // post requets
app.post("/", (req, res) => {
    res.send("Hello, i am root")
})
app.post("/apple", (req, res) => {
    res.send("you contacted apple")
})
app.post("/orange", (req, res) => {
    res.send("you contacted orange")
})
app.post("*", (req, res) => {
    res.send("This path is not exist")
})