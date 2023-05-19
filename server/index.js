const express = require('express')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, './.env') })

const app = express()

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// enable cors
app.use(cors())
app.options('*', cors())

app.get('/api/getAutoComplete', async (req, res) => {
  try {
    let input = req.query.input
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${input}&key=${process.env.MAPS_API_KEY}`)
    res.send(data)
  } catch (e) {
    console.log({ e })
  }
})

app.get('/api/getPlaceDetails', async (req, res) => {
  try {
    let placeID = req.query.placeID
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=name%2Cformatted_address%2Cgeometry&key=${process.env.MAPS_API_KEY}`)
    res.send(data)
  } catch (e) {
    console.log({ e })
  }
})

app.listen('3001', () => {
  console.log('Server running on port 3001')
})
