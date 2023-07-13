import { Router } from 'express';
import {SpecializationController} from '#application/controllers/specialization.controller.js';
const specializationController = new SpecializationController
const specialization = Router();

specialization.get('/specialization/', specializationController.getAllSpecializations);

specialization.post('/specialization/', specializationController.createSpecialization);

specialization.patch('/specialization/:uuid', specializationController.updateSpecialization);

specialization.delete('/specialization/:uuid', specializationController.deleteSpecialization);
export default specialization;
