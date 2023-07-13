import { Router } from 'express';
import {SchoolHistoryController} from '#application/controllers/schoolHistory.controller.js';
const schoolHistoryController = new SchoolHistoryController
const schoolHistory = Router();

schoolHistory.get('/schoolHistory', schoolHistoryController.getAllSchoolHistories);

schoolHistory.get('/schoolHistory/:uuid', schoolHistoryController.getPersonSchoolHistory);

schoolHistory.post('/schoolHistory', schoolHistoryController.createSchoolHistory);

schoolHistory.patch('/schoolHistory/:uuid', schoolHistoryController.updateSchoolHistory);

schoolHistory.delete('/schoolHistory/:uuid', schoolHistoryController.deleteSchoolHistory);

export default schoolHistory;
