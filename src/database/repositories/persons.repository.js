import { ENTITIES } from '#constants/entities.js';
import { database } from '#database/database.js';

export class PersonsRepository {
    constructor() {
        this._db = database;
        this._entity = ENTITIES.PERSONS;
    }

    async createPerson(person) {
        return await this._db.create(this._entity, person);
    }

    async getAllPersons() {
        return await this._db.getAll(this._entity);
    }

    async getPersonById(personId) {
        return await this._db.getPersonByPk(this._entity, personId);
    }

    async updatePerson(personId, person) {
        return this._db.update(this._entity, personId, person);
    }

    async deletePerson(personId) {
        return await this._db.delete(this._entity, personId);
    }
}
