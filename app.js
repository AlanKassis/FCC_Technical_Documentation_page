var express = require('express')
var path = require('path')
var port = 3000

var app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/views/index.html");
})
        

const server = app.listen(process.env.PORT || 5000, () => {
    port = server.address().port;
    console.log(`Express is working on port ${port}`);
});

if (port == null || port =="") {
    port = 8000;
}

app.listen(port);

module.exports = app; 

