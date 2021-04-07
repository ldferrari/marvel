const Pokemon = require('../models/Pokemon');

const getAll = async(req, res) => {
  try {
    const pokemons = await Pokemon.getAll();

    return res.status(200).json({ pokemons });
  } catch (error) {
    return res.status(500).json({ error: 'FATAL ERROR 500' });
  }
};

module.exports = { getAll };
