import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class SchoolHistoryRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.SCHOOLHISTORIES;
    }

    async createSchoolHistory(schoolHistoryData) {
        return await this._db.create(this._entity, schoolHistoryData);
    }

    async getAllSchoolHistories() {
        return await this._db.getAll(this._entity);
    }

    async getSchoolHistoryById(personId) {
        return await this._db.getByPersonId(this._entity, personId);
    }

    async updateSchoolHistory(schoolHistoryId, schoolHistory) {
        return this._db.update(this._entity, schoolHistoryId, schoolHistory);
    }

    async deleteSchoolHistory(schoolHistoryId) {
        return await this._db.delete(this._entity, schoolHistoryId);
    }
}
