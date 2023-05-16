import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import SolicitudBeca from "./solicitudBecaModel.js";
import FichaSocioeconomica from "./fichaSocioeconomicaModel.js";

const Estudiante = sequelize.define(
  "estudiante",
  {
    cedula: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING(50),
    },
    apellidos: {
      type: DataTypes.STRING(50),
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
    },
    carrera: {
      type: DataTypes.STRING(20),
    },
    nivel_preparacion: {
      type: DataTypes.STRING(20),
    },
    numero_solicitud: {
      type: DataTypes.STRING(20),
    },
  },
  { timestamps: true }
);

//Un Estudiante tiene muchas SolicitudBeca
Estudiante.hasMany(SolicitudBeca, { foreignKey: "estudiante_cedula" });
SolicitudBeca.belongsTo(Estudiante, { foreignKey: "estudiante_cedula" });

//Composición: Un Estudiante tiene una FichaSocioeconomica
Estudiante.hasOne(FichaSocioeconomica, {
  foreignKey: {
    name: "estudiante_cedula",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

export default Estudiante;
