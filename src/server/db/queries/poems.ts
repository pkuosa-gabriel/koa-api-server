import knex from '../connection';

function addPoem(poem) {
  return knex('poems')
    .insert(poem)
    .returning('*');
}

function updatePoem(id, poem) {
  return knex('poems')
    .select('*')
    .where({id: parseInt(id, 10)})
    .update(poem)
    .update('updated_at', knex.fn.now())
    .returning('*');
}

function deletePoem(id) {
  return knex('poems')
    .select('*')
    .where({id: parseInt(id, 10)})
    .del();
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
  updatePoem,
  deletePoem,
  getAllPoems,
  getSinglePoem,
};

export default queries;
