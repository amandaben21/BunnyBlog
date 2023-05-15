const BunnyController = require('../controllers/bunny.controller');

module.exports = app => {
    app.get('/api/bunnies', BunnyController.findAllBunnies);
    app.get('/api/bunnies/:id', BunnyController.findOneBunny);
    app.post('/api/bunnies', BunnyController.createBunny);

    // changes only the values in the request body
    app.patch('/api/bunnies/:id', BunnyController.updateBunny);
    app.delete('/api/bunnies/:id', BunnyController.deleteBunny);
};