/*console.log("hi")
const http = require('http')

http.createServer(function(req, res)

{
    res.end("Hello from my server")
}).listen(7000)

console.log("start server")*/

const express =require('express')
var app = express()



app.get("/",function(req,res)
{
    res.send("start server")
   
})


app.get('/form', function(req,res)
{
    res.sendFile(__dirname+'/form.html')
})

var bodyParser= require('body-parser')

var urlEncoded= bodyParser.urlencoded({extended:false})


app.post('/submitform',urlEncoded,function(req,res){
    res.send("data submitted"+req.body.email+req.body.password+req.body.gridRadios)
})




var server = app.listen(7000,function()
{
    var host = server.address().address//local one
    var port = server.address().port
})