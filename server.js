const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path')
var _ = require('lodash')
const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
  res.send('This is Product Server')
})

app.listen(port)