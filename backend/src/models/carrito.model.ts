// import { sequelize } from "../database";
import { DataTypes, Sequelize } from "sequelize";

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    apelliods: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    modelName: "Usuario",
  }
);

export default Usuario;
