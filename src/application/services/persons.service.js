import {  PersonsRepository } from "#database/repositories/persons.repository.js";

export class PersonsService {
    constructor() {
        this._repo = new PersonsRepository();
    }

    createPerson = async (person) => {
        return await this._repo.createPerson(person);
    };

    getAllPersons = async () => {
        return await this._repo.getAllPersons();
    };

    getPersonById = async (personId) => {
        return await this._repo.getPersonById(personId);
    };

    updatePerson = async (personId, person) => {
        return await this._repo.updatePerson(personId, person);
    };

    deletePerson = async (personId) => {
        return await this._repo.deletePerson(personId);
    };
}
