const router = require('express').Router()

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

module.exports = router