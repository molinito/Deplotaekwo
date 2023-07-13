import { BeltHistoryService } from '#application/services/beltHistory.service.js';

export class BeltHistoryController {
    constructor() {
        this._service = new BeltHistoryService();
    }

    createBeltHistory = async (req, res, next) => {
        try {
            const beltHistoryData = req.body;            
            const createdBeltHistory = await this._service.createBeltHistory(beltHistoryData);
            res.status(201).json(createdBeltHistory);
        } catch (error) {
            next(error);
        }
    };

    getAllBeltHistories = async (req, res, next) => {
        try {
            const beltHistories = await this._service.getAllBeltHistories();
            res.json(beltHistories);
        } catch (error) {
            next(error);
        }
    };

    getPersonBeltHistory = async (req, res, next) => {
        const id = req.params.uuid;  
        try {
            const beltHistory = await this._service.getBeltHistoryById(id)

            if (beltHistory) {
                res.status(200).json(beltHistory);
            } else {
                res.status(404).json({ message: 'Historial no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    }

    updateBeltHistory = async (req, res, next) => {
        try {
            const beltHistoryId = req.params.uuid;
            const updatedBeltHistoryData = req.body;
            const updatedBeltHistory = await this._service.updateBeltHistory(
                beltHistoryId,
                updatedBeltHistoryData
            );
            res.json(updatedBeltHistory);
        } catch (error) {
            next(error);
        }
    };

    deleteBeltHistory = async (req, res, next) => {
        try {
            const beltHistoryId = req.params.uuid;
            await this._service.deleteBeltHistory(beltHistoryId);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    };
}
