import { SpecializationService } from '#application/services/specialization.service.js';

export class SpecializationController {
    constructor() {
        this._service = new SpecializationService();
    }

    createSpecialization = async (req, res, next) => {
        try {
            const specializationData = req.body;            
            const createdspecialization = await this._service.createSpecialization(specializationData);
            res.status(201).json(createdspecialization);
        } catch (error) {
            next(error);
        }
    };

    getAllSpecializations = async (req, res, next) => {
        try {
            const specializations = await this._service.getAllSpecializationes();
            res.json(specializations);
        } catch (error) {
            next(error);
        }
    };

    getPersonSpecialization = async (req, res, next) => {
        const id = req.params.uuid;  
        try {
            const specialization = await this._service.getSpecializationById(id)

            if (specialization) {
                res.status(200).json(specialization);
            } else {
                res.status(404).json({ message: 'Historial no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    }

    updateSpecialization = async (req, res, next) => {
        try {
            const specializationId = req.params.uuid;
            const updatedspecializationData = req.body;
            const updatedspecialization = await this._service.updateSpecialization(
                specializationId,
                updatedspecializationData
            );
            res.json(updatedspecialization);
        } catch (error) {
            next(error);
        }
    };

    deleteSpecialization = async (req, res, next) => {
        try {
            const specializationId = req.params.uuid;
            await this._service.deleteSpecialization(specializationId);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    };
}
