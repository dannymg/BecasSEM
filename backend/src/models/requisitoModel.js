import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Requisito = sequelize.define(
  "requisito",
  {
    id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(20),
    },
    descripcion: {
      type: DataTypes.STRING(100),
    },
    tipo_requisito: {
      type: DataTypes.STRING(30),
    },
  },
  { timestamps: true }
);

export default Requisito;
