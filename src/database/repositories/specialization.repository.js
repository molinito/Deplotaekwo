import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class SpecializationRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.SPECILIZATIONS;
    }

    async createSpecialization(specializationData) {
        return await this._db.create(this._entity, specializationData);
    }

    async getAllSpecializationes() {
        return await this._db.getAllByPerson(this._entity);
    }

    async getSpecializationById(personId) {
        return await this._db.getByPersonId(this._entity, personId);
    }

    async updateSpecialization(personId, specialization) {
        return this._db.updateByPerson(this._entity, personId, specialization);
    }

    async deleteSpecialization(specializationId) {
        return await this._db.delete(this._entity, specializationId);
    }
}
