import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const SolicitudBeca = sequelize.define(
  "solicitud_beca",
  {
    numero: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    motivo: {
      type: DataTypes.STRING(100),
    },
    tipo_postulacion: {
      type: DataTypes.STRING(30),
    },
    estado: {
      type: DataTypes.STRING(25),
    },
  },
  { timestamps: true }
);

export default SolicitudBeca;
