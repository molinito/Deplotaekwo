import { PersonsService } from '#application/services/persons.service.js';
// import { SchoolHistoryModel } from "#database/models/school-history.js";
import {SchoolHistoryService } from '#application/services/schoolHistory.service.js';

export class PersonsController {
    constructor() {
        this._service = new PersonsService();
        this._schoolHistoryService = new SchoolHistoryService();
    }

    getAllPersons = async (req, res, next) => {
        try {
            const persons = await this._service.getAllPersons();
            res.status(200).json(persons);
        } catch (error) {
            next(error);
        }
    };

    getPersonById = async (req, res, next) => {
        const id = req.params.uuid;
        try {
            const person = await this._service.getPersonById(id);
            if (person) {
                res.status(200).json(person);
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    };

    createPerson = async (req, res, next) => {
        const { fullName, dni, born, galCertified, galAttach } = req.body;
        try {
            const person = await this._service.createPerson({
                fullName,
                dni,
                born,
                galCertified,
                galAttach
            });
            res.status(201).json(person);
        } catch (error) {
            next(error);
        }
    };

    updatePerson = async (req, res, next) => {
        const id = req.params.uuid;
        const newData = req.body;
        try {
            const person = await this._service.updatePerson(id, newData);
            if (person[0]) {
                res.status(200).json(person);
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    };

    deletePerson = async (req, res, next) => {
        const id = req.params.uuid;
        try {
            const person = await this._service.deletePerson(id);            
            if (person) {
                res.status(200).json({
                    message: 'Estudiante eliminado exitosamente'
                });
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    };


}
    