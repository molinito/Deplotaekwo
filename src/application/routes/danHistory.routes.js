import { Router } from 'express';
import {DanHistoryController} from '#application/controllers/danHistory.controller.js';
const danHistoryController = new DanHistoryController
const danHistory = Router();

danHistory.get('/danHistory', danHistoryController.getAllDanHistories);

danHistory.get('/danHistory/:uuid', danHistoryController.getPersonDanHistory);

danHistory.post('/danHistory', danHistoryController.createDanHistory);

danHistory.patch('/danHistory/:uuid', danHistoryController.updateDanHistory);

danHistory.delete('/danHistory/:uuid', danHistoryController.deleteDanHistory);

export default danHistory;
