import { SpecializationRepository } from '#database/repositories/specialization.repository.js';

export class SpecializationService {
    constructor() {
        this._repo = new SpecializationRepository();
    }

    createSpecialization = async (specializationData) => {
        return await this._repo.createSpecialization(specializationData);
    };

    getAllSpecializationes = async () => {
        return await this._repo.getAllSpecializationes();
    };

    getSpecializationById = async (personId) => {
        return await this._repo.getSpecializationById(personId);
    };

    updateSpecialization = async (personId, specialization) => {
        return await this._repo.updateSpecialization(
            personId,
            specialization
        );
    };

    deleteSpecialization = async (specializationId) => {
        return await this._repo.deleteSpecialization(specializationId);
    };
}
