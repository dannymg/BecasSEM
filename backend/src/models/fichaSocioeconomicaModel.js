import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const FichaSocieconomica = sequelize.define(
  "ficha_socieconomica",
  {
    id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    descripcion: {
      type: DataTypes.STRING(100),
    },
    nro_familiares: {
      type: DataTypes.INTEGER,
    },
    ingreso_familiar: {
      type: DataTypes.DOUBLE,
    },
    gastos_alimentacion: {
      type: DataTypes.DOUBLE,
    },
    gastos_vivienda: {
      type: DataTypes.DOUBLE,
    },
    gastos_educacion: {
      type: DataTypes.DOUBLE,
    },
    observaciones: {
      type: DataTypes.STRING(100),
    },
  },
  { timestamps: true }
);

export default FichaSocieconomica;
