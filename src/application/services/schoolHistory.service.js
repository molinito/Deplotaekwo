import { SchoolHistoryRepository } from '#database/repositories/schoolHistory.repository.js';

export class SchoolHistoryService {
    constructor() {
        this._repo = new SchoolHistoryRepository();
    }

    createSchoolHistory = async (schoolHistoryData) => {
        return await this._repo.createSchoolHistory(schoolHistoryData);
    };

    getAllSchoolHistories = async () => {
        return await this._repo.getAllSchoolHistories();
    };

    getSchoolHistoryById = async (personId) => {
        return await this._repo.getSchoolHistoryById(personId);
    };

    updateSchoolHistory = async (schoolHistoryId, schoolHistory) => {
        return await this._repo.updateSchoolHistory(
            schoolHistoryId,
            schoolHistory
        );
    };

    deleteSchoolHistory = async (schoolHistoryId) => {
        return await this._repo.deleteSchoolHistory(schoolHistoryId);
    };
}
