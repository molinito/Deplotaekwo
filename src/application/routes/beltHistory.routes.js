import { Router } from 'express';
import {BeltHistoryController} from '#application/controllers/beltHistory.controller.js';
const beltHistoryController = new BeltHistoryController
const beltHistory = Router();

beltHistory.get('/beltHistory', beltHistoryController.getAllBeltHistories);

beltHistory.get('/beltHistory/:uuid', beltHistoryController.getPersonBeltHistory);

 beltHistory.post('/beltHistory', beltHistoryController.createBeltHistory);

beltHistory.patch('/beltHistory/:uuid', beltHistoryController.updateBeltHistory);

beltHistory.delete('/beltHistory/:uuid', beltHistoryController.deleteBeltHistory);

export default beltHistory;
