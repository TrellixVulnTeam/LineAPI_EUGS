const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const app = express()
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/line/api/user', (req, res) =>{
  res.render('demo')
})
app.get('/hello', (req, res) => {
  res.send({
      okay: true
  })
})
app.listen(process.env.PORT || 3000, err =>{
  if(err){
    console.log(err)
  }else{
    console.log('Server listens on port', process.env.PORT || 3000)
  }
})