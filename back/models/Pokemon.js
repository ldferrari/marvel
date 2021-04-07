const connection = require('./connection');

const getAll = async () => {
 try {
   console.log('here')
  const result = await connection.execute('SELECT * from Pokemon.pokemons');  
  console.log(result[0])
  return result[0];
 } catch (error) {
  console.log('errpr', error)
   return null;
 }
};

module.exports = { getAll };
