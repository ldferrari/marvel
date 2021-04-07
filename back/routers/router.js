const router = require('express').Router();
const pokemonController = require('../controllers/pokemonController');

//pokemon.id
//pokemon.name
//pokemon.type

router.get('/pokemons', pokemonController.getAll);

module.exports = router;
