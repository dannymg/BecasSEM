import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Beca from "./becaModel.js";

const EncargadoBienestar = sequelize.define(
  "encargado_bienestar",
  {
    numero_social: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING(50),
    },
    apellidos: {
      type: DataTypes.STRING(50),
    },
    cargo: {
      type: DataTypes.STRING(30),
    },
    sueldo: {
      type: DataTypes.DOUBLE,
    },
  },
  { timestamps: true }
);

//Un EncargadoBienestar tiene muchas Beca
EncargadoBienestar.hasMany(Beca, { foreignKey: "encargado_numero" });
Beca.belongsTo(EncargadoBienestar, { foreignKey: "encargado_numero" });

export default EncargadoBienestar;
