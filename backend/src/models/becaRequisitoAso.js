import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const BecaRequisito = sequelize.define(
  "beca_requisito",
  {
    id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
  },
  { timestamps: true }
);

export default BecaRequisito;
