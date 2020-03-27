const express = require('express');


const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentsController');

const routes = express.Router();

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents',incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id',incidentController.delete);

module.exports = routes;