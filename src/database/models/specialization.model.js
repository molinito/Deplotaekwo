import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';

export class SpecializationsModel extends Model {}

SpecializationsModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        isTeacher: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isReferee: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        certReferee: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        isCoach: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        certCoach: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.SPECILIZATIONS
    }
);
