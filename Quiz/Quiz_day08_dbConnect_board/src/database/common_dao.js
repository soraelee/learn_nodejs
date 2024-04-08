const oracledb = require("oracledb")
const dbConfig = require("../../config/database/dbConfig")
oracledb.outFormat = oracledb.OBJECT;
oracledb.autoCommit = true;

module.exports = oracledb.getConnection(dbConfig);