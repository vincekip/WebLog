var models = require('./server.js').models;

/*
var toSave = [
    {name: 'Nick', email: 'nick@nicktest.com'},
    {name: 'Nickson', email: 'nick@nicktest.com'},
    {name: 'Nickbob', email: 'nick@nicktest.com'},
    {name: 'Nicksalat', email: 'nick@nicktest.com'},
    {name: 'Nickodemas', email: 'nick@nicktest.com'},
]

toSave.map(obj=>{
    models.Profile.create(obj,(err, created) =>{
        console.log('Created?', created);
    })
})
*/
var filter = {
  where: {
      email: {like: 'nick'}
  },
  order: 'id ASC',
  limit: 1,
  skip: 0,
  fields: {
      email: true,
  },
};

models.Profile.destroyAll(filter.where, (err, found) =>{
  console.log('Found?', err, found);
  // found.destroy(); //destroy object on itself
});
