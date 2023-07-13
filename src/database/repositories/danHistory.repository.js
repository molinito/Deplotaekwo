import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class DanHistoryRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.DAN;
    }

    async createDanHistory(danHistoryData) {
        return await this._db.create(this._entity, danHistoryData);
    }

    async getAllDanHistories() {
        return await this._db.getAll(this._entity);
    }

    async getDanHistoryById(personId) {
        return await this._db.getByPersonId(this._entity, personId);
    }

    async updateDanHistory(danHistoryId, danHistory) {
        return this._db.update(this._entity, danHistoryId, danHistory);
    }

    async deleteDanHistory(danHistoryId) {
        return await this._db.delete(this._entity, danHistoryId);
    }
}
