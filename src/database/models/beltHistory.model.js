import { ENTITIES } from '#constants/entities.js';
import { sequelize } from '#database/dao/sequelize.js';
import { DataTypes, Model } from 'sequelize';

export class BeltHistoryModel extends Model {}

BeltHistoryModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        beltRank: {
            type: DataTypes.ENUM(
                '10º GUP Cinturón Blanco',
                '9º GUP Cinturón Blanco punta amarilla',
                '8º GUP Cinturón Amarillo',
                '7º GUP Cinturón Amarrillo punta verde',
                '6º GUP Cinturón Verde',
                '5º GUP Cinturón Verde punta azul',
                '4º GUP Cinturón Azul',
                '3º GUP Cinturón Azul punta roja',
                '2º GUP Cinturón rojo',
                '1º GUP Cinturón rojo punta negra'
            ),
            defaultValue: '10º GUP Cinturón Blanco'
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
        modelName: ENTITIES.BELTS
    }
);
