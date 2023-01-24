const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', (req, res) => {
  axios.get('http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider')
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      console.log(error)
    })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
