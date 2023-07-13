import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class SchoolsRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.SCHOOLS;
    }

    async createSchool(institute) {
        return await this._db.create(this._entity, institute);
    }

    async getAllSchools() {
        return await this._db.getAll(this._entity);
    }

    async getSchoolById(instituteId) {
        return await this._db.getById(this._entity, instituteId);
    }

    async updateSchool(instituteId, institute) {
        console.log(instituteId, institute)
        return await this._db.update(this._entity, instituteId, institute);
    }

    async deleteSchool(instituteId) {
        return await this._db.deleteById(this._entity, instituteId);
    }
}
