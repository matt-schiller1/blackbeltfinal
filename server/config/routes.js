const restaurants = require('../controllers/restaurants.js');

module.exports = function (app) {
  app.get('/restaurants', restaurants.index);
  app.get('/:id', restaurants.display)
  app.get('/restaurants/:id', restaurants.displaySingle)
  app.post('/restaurants/new', restaurants.add);
  app.post('/restaurants/:id/review', restaurants.addReview);
  app.put('/update/:id', restaurants.update);
  app.delete('/remove/:id', restaurants.destroy);
}
