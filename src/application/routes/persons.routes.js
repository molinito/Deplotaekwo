import { Router } from 'express';
import {PersonsController} from '#application/controllers/persons.controller.js';
const personsController = new PersonsController

const personsRoutes = Router();

personsRoutes.get('/persons', personsController.getAllPersons);

personsRoutes.get('/persons/:uuid', personsController.getPersonById);

personsRoutes.post('/persons', personsController.createPerson);

personsRoutes.patch('/persons/:uuid', personsController.updatePerson);

personsRoutes.delete('/persons/:uuid', personsController.deletePerson);

export default personsRoutes;
