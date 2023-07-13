import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';

export class SchoolHistoryModel extends Model {}

SchoolHistoryModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        schoolName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hasDebt: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        transferDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        },
        terminationForm: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: null
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.SCHOOLHISTORIES
    }
);

