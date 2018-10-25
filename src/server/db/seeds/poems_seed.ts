exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('poems')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('poems').insert([
        {name: '偶然', author: '张三', votes: 12},
        {name: '必然', author: '王五', votes: 2},
        {name: '偶然或必然', author: '李四', votes: 8},
      ]);
    });
};
