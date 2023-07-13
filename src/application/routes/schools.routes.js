import { Router } from 'express';
import { SchoolsController } from "#application/controllers/schools.controller.js";
const schoolsController = new SchoolsController

const schoolsRoutes = Router();

schoolsRoutes.get('/schools', schoolsController.getAllSchools);

schoolsRoutes.get('/schools/:uuid', schoolsController.getSchoolById);

schoolsRoutes.post('/schools', schoolsController.createSchool);

schoolsRoutes.patch('/schools/:uuid', schoolsController.updateSchool);

schoolsRoutes.delete('/schools/:uuid', schoolsController.deleteSchool);

export default schoolsRoutes;
