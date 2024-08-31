const express = require('express')
const cors = require('cors');
const Fetch = require('./functions/fetch')
const app = express()
const port = 4000

app.use(cors()); 

app.get('/', (req, res) => {
    res.send('Hello DearDoc')
})

app.get('/pokemon', Fetch.pokemonDefault)
app.get('/pokemon/:pokemon', Fetch.pokemon)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})