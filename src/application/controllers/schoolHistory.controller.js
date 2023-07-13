import { SchoolHistoryService } from '#application/services/schoolHistory.service.js';

export class SchoolHistoryController {
    constructor() {
        this._service = new SchoolHistoryService();
    }

    createSchoolHistory = async (req, res, next) => {
        try {
            const schoolHistoryData = req.body;
            const createdSchoolHistory = await this._service.createSchoolHistory(schoolHistoryData);
            res.status(201).json(createdSchoolHistory);
        } catch (error) {
            next(error);
        }
    };

    getAllSchoolHistories = async (req, res, next) => {
        try {
            const schoolHistories = await this._service.getAllSchoolHistories();
            res.json(schoolHistories);
        } catch (error) {
            next(error);
        }
    };

    getPersonSchoolHistory = async (req, res, next) => {
        const id = req.params.uuid;  
        try {
            const schoolHistory = await this._service.getSchoolHistoryById(id)

            if (schoolHistory) {
                res.status(200).json(schoolHistory);
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    }

    updateSchoolHistory = async (req, res, next) => {
        try {
            const schoolHistoryId = req.params.uuid;
            const updatedSchoolHistoryData = req.body;
            const updatedSchoolHistory = await this._service.updateSchoolHistory(
                schoolHistoryId,
                updatedSchoolHistoryData
            );
            res.json(updatedSchoolHistory);
        } catch (error) {
            next(error);
        }
    };

    deleteSchoolHistory = async (req, res, next) => {
        try {
            const schoolHistoryId = req.params.uuid;
            await this._service.deleteSchoolHistory(schoolHistoryId);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    };
}
