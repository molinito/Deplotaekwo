import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';

export class DANHistoryModel extends Model {}

DANHistoryModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        danRank: {
            type: DataTypes.ENUM(
                '9º DAN',
                '8º DAN',
                '7º DAN',
                '6º DAN',
                '5º DAN',
                '4º DAN',
                '3º DAN',
                '2º DAN',
                '1º DAN'
            ),
            defaultValue:'1º DAN',
            allowNull: false,
        },
        teacher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        approvedDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize: sequelize.instance,
        modelName: ENTITIES.DAN
    }
);
