const axios = require('axios')


exports.pokemonDefault = (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' )
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            res.json(error)
        })
        .finally(function () {
            // always executed
        });
}
exports.pokemon = (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + req.params.pokemon )
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            res.json(error)
        })
        .finally(function () {
            // always executed
        });
}