import { BeltHistoryRepository } from '#database/repositories/beltHistory.repository.js';

export class BeltHistoryService {
    constructor() {
        this._repo = new BeltHistoryRepository();
    }

    createBeltHistory = async (beltHistoryData) => {
        return await this._repo.createBeltHistory(beltHistoryData);
    };

    getAllBeltHistories = async () => {
        return await this._repo.getAllBeltHistories();
    };

    getBeltHistoryById = async (personId) => {
        return await this._repo.getBeltHistoryById(personId);
    };

    updateBeltHistory = async (beltHistoryId, beltHistory) => {
        return await this._repo.updateBeltHistory(
            beltHistoryId,
            beltHistory
        );
    };

    deleteBeltHistory = async (beltHistoryId) => {
        return await this._repo.deleteBeltHistory(beltHistoryId);
    };
}
