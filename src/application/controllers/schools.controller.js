import { SchoolsService } from '#application/services/schools.service.js';

export class SchoolsController {
    constructor() {
        this._service = new SchoolsService();
    }

    createSchool = async (req, res, next) => {
        try {
            const schoolData = req.body;
            const createdSchool = await this._service.createSchool(
                schoolData
            );
            res.status(201).json(createdSchool);
        } catch (error) {
            next(error);
        }
    };

    getAllSchools = async (req, res, next) => {
        try {
            const schools = await this._service.getAllSchools();
            res.json(schools);
        } catch (error) {
            next(error);
        }
    };

    getSchoolById = async (req, res, next) => {
        try {
            const schoolId = req.params.uuid;
            const school = await this._service.getSchoolById(schoolId);
            res.json(school);
        } catch (error) {
            next(error);
        }
    };

    updateSchool = async (req, res, next) => {
        try {
            const schoolId = req.params.uuid;
            const updatedSchoolData = req.body;
            const updatedSchool = await this._service.updateSchool(
                schoolId,
                updatedSchoolData
            );
            res.json(updatedSchool);
        } catch (error) {
            next(error);
        }
    };

    deleteSchool = async (req, res, next) => {
        try {
            const schoolId = req.params.uuid;
            await this._service.deleteSchool(schoolId);
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    };
}
