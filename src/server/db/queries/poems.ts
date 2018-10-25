import knex from '../connection';

function addPoem(poem) {
  return knex('poems')
    .insert(poem)
    .returning('*');
}

function getAllPoems() {
  return knex('poems').select('*');
}

function getSinglePoem(id) {
  return knex('poems')
    .select('*')
    .where({id: parseInt(id, 10)});
}

const queries = {
  addPoem,
  getAllPoems,
  getSinglePoem,
};

export default queries;
