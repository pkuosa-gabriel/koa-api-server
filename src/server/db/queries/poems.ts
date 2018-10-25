import knex from '../connection';

function getAllPoems() {
  return knex('poems').select('*');
}

const queries = {getAllPoems};

export default queries;
