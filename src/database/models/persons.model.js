import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';
import { DANHistoryModel } from './danHistory.model.js';
import { BeltHistoryModel } from './beltHistory.model.js';
import { SchoolHistoryModel } from './schoolHistory.model.js';
import { SpecializationsModel } from './specialization.model.js';

export class PersonsModel extends Model {}

PersonsModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        born: {
            type: DataTypes.DATE,
            allowNull: false
        },
        galCertified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        galAttach: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.PERSONS
    }
);

PersonsModel.hasMany(BeltHistoryModel, {
    foreignKey: 'personId',
    sourceKey: 'id',
    as: 'gup'
});
BeltHistoryModel.belongsTo(PersonsModel, {
    foreignKey: 'personId',
    targetId: 'id'
});

PersonsModel.hasMany(DANHistoryModel, {
    foreignKey: 'personId',
    as: 'dan'
});
DANHistoryModel.belongsTo(PersonsModel, {
    foreignKey: 'personId',
    targetId: 'id'
});

PersonsModel.hasOne(SpecializationsModel, {
    foreignKey: 'personId',
    as: 'specializations'
});

SpecializationsModel.belongsTo(PersonsModel, {
    foreignKey: 'personId',
    targetId: 'id'
});

PersonsModel.hasMany(SchoolHistoryModel, {
    foreignKey: 'personId',
    as: 'schoolHistories'
});
SchoolHistoryModel.belongsTo(PersonsModel, {
    foreignKey: 'personId',
    targetId: 'id'
});
