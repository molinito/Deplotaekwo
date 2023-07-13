import { DanHistoryRepository } from '#database/repositories/danHistory.repository.js';

export class DanHistoryService {
    constructor() {
        this._repo = new DanHistoryRepository();
    }

    createDanHistory = async (danHistoryData) => {
        return await this._repo.createDanHistory(danHistoryData);
    };

    getAllDanHistories = async () => {
        return await this._repo.getAllDanHistories();
    };

    getDanHistoryById = async (personId) => {
        return await this._repo.getDanHistoryById(personId);
    };

    updateDanHistory = async (danHistoryId, danHistory) => {
        return await this._repo.updateDanHistory(
            danHistoryId,
            danHistory
        );
    };

    deleteDanHistory = async (danHistoryId) => {
        return await this._repo.deleteDanHistory(danHistoryId);
    };
}
