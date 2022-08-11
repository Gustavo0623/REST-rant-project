const router = require('express').Router()
const places = require('../models/places.js')

// routes

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    // places array with restaurant data
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/css/images/emy-XoByiBymX20-unsplash.jpg',
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/css/images/ricardo-l-LJmzAGwrUoA-unsplash.jpg',
      }]
      
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router