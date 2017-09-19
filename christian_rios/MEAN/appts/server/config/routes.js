let path = require('path');
let UsersController = require('../controllers/users');
let AppointmentsController = require('../controllers/appointments');

module.exports = function(app) {
    app.post('/users', UsersController.create);

    app.get('/appointments', AppointmentsController.index);
    app.post('/appointments', AppointmentsController.create);
    app.put('/appointments/:id', AppointmentsController.delete);

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
};