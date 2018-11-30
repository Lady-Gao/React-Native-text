var express = require("express");
var app = express();
app.get("/list", function (req, res) {
        res.json({a:5})
 });
app.listen(3000);
console.log("程序运行")