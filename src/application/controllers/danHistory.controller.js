import { DanHistoryService } from '#application/services/danHistory.service.js';

export class DanHistoryController {
    constructor() {
        this._service = new DanHistoryService();
    }

    createDanHistory = async (req, res, next) => {
        try {
            const danHistoryData = req.body;            
            const createdDanHistory = await this._service.createDanHistory(danHistoryData);
            res.status(201).json(createdDanHistory);
        } catch (error) {
            next(error);
        }
    };

    getAllDanHistories = async (req, res, next) => {
        try {
            const danHistories = await this._service.getAllDanHistories();
            res.json(danHistories);
        } catch (error) {
            next(error);
        }
    };

    getPersonDanHistory = async (req, res, next) => {
        const id = req.params.uuid;  
        try {
            const danHistory = await this._service.getDanHistoryById(id)

            if (danHistory) {
                res.status(200).json(danHistory);
            } else {
                res.status(404).json({ message: 'Historial no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    }

    updateDanHistory = async (req, res, next) => {
        try {
            const danHistoryId = req.params.uuid;
            const updatedDanHistoryData = req.body;
            const updatedDanHistory = await this._service.updateDanHistory(
                danHistoryId,
                updatedDanHistoryData
            );
            res.json(updatedDanHistory);
        } catch (error) {
            next(error);
        }
    };

    deleteDanHistory = async (req, res, next) => {
        try {
            const danHistoryId = req.params.uuid;
            await this._service.deleteDanHistory(danHistoryId);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    };
}
