import { ENTITIES } from '#constants/entities.js';
import { DANHistoryModel } from './models/danHistory.model.js';
import { BeltHistoryModel } from './models/beltHistory.model.js';
import { ModeratorsModel } from './models/moderators.model.js';
import { PersonsModel } from './models/persons.model.js';
import { SchoolHistoryModel } from './models/schoolHistory.model.js';
import { SchoolsModel } from './models/schools.model.js';
import { SpecializationsModel } from './models/specialization.model.js';

export class Database {
    constructor() {
        this._models = {
            [ENTITIES.MODERATORS]: ModeratorsModel,
            [ENTITIES.PERSONS]: PersonsModel,
            [ENTITIES.SCHOOLS]: SchoolsModel,
            [ENTITIES.SPECILIZATIONS]: SpecializationsModel,
            [ENTITIES.SCHOOLHISTORIES]: SchoolHistoryModel,
            [ENTITIES.DAN]: DANHistoryModel,
            [ENTITIES.BELTS]: BeltHistoryModel
        };
    }

    static connect = async (sequelize) => {
        try {
            await sequelize.auth();
            await sequelize.sync();
        } catch (error) {
            throw new Error(`CANNOT_CONNECT_TO_DATABASE: ${error.message}`);
        }
    };

    static disconnect = async (sequelize) => {
        await sequelize.close();
    };

    getBy = async (entity, data) => {
        return await this._models[entity].findOne({ where: data });
    };

    getAll = async (entity, search) => {
        return await this._models[entity].findAll(search);
    };
    
    getPersonByPk = async (entity, id) => {
        return await this._models[entity].findAll({
            include: 'specializations',
            where: {id}
        });
    };

    getByPersonId = async (entity, personId, options) => {
        return await this._models[entity].findAll({
            where: { personId }            
          });
    };

    getById = async (entity, id, options) => {
        return await this._models[entity].findAll({
            where: { id }            
          });
    };

    getAllByPerson = async (entity, search) => {
        return await this._models[entity].findAll({
            include: 'personId',
            search,
        });
    };

    create = async (entity, data) => {
        return await this._models[entity].create(data);
    };

    update = async (entity, id, data) => {        
        return await this._models[entity].update(data, { where: { id } });
    };

    
    updateByPerson = async (entity, personId, data) => {        
        return await this._models[entity].update(data, { where: { personId } });
    };

    delete = async (entity, id) => {
        return await this._models[entity].destroy({ where: { id } });
    };
}

export const database = new Database();
