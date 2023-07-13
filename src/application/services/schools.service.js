import { SchoolsRepository } from "#database/repositories/schools.repository.js";

export class SchoolsService {
    constructor() {
        this._repo = new SchoolsRepository();
    }

    createSchool = async (school) => {
        return await this._repo.createSchool(school);
    };

    getAllSchools = async () => {
        return await this._repo.getAllSchools();
    };

    getSchoolById = async (schoolId) => {
        return await this._repo.getSchoolById(schoolId);
    };

    updateSchool = async (schoolId, school) => {
        return await this._repo.updateSchool(schoolId, school);
    };

    deleteSchool = async (schoolId) => {
        return await this._repo.deleteSchool(schoolId);
    };
}
