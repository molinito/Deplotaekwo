import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class BeltHistoryRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.BELTS;
    }

    async createBeltHistory(beltHistoryData) {
        return await this._db.create(this._entity, beltHistoryData);
    }

    async getAllBeltHistories() {
        return await this._db.getAll(this._entity);
    }

    async getBeltHistoryById(personId) {
        return await this._db.getByPersonId(this._entity, personId);
    }

    async updateBeltHistory(beltHistoryId, beltHistory) {
        return this._db.update(this._entity, beltHistoryId, beltHistory);
    }

    async deleteBeltHistory(beltHistoryId) {
        return await this._db.delete(this._entity, beltHistoryId);
    }
}
