import Sequelize from "sequelize";

const database = process.env.DB_NAME || "becas_db";
const username = process.env.DB_USERNAME || "becas_user";
const password = process.env.DB_PASSWORD || "1234";
const host = process.env.DB_HOST || "localhost";

export const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "postgres",
});

export default sequelize;
