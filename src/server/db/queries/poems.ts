import knex from '../connection';

function getAllPoems() {
  return knex('poems').select('*');
}

function getSinglePoem(id) {
  return knex('poems')
    .select('*')
    .where({id: parseInt(id, 10)});
}

const queries = {
  getAllPoems,
  getSinglePoem,
};

export default queries;