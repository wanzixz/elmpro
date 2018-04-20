
let express = require('express')

let app = express()

let appData = require('./data.json')

let seller = appData.seller

let goods = appData.goods

let ratings = appData.ratings

app.get('/api/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  })
})

app.get('/api/goods', function (req, res) {
  res.json({errno: 0, data: goods})
})

app.get('/api/ratings', function (req, res) {
  res.json({errno: 0, data: ratings})
})

app.listen(3000, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('Listening at http://localhost:3000' + '\n')
})
