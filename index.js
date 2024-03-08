require('dotenv').config();

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('twitter Name')
})
app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})
app.get('/akash', (req, res) => {
    res.send('akash')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})