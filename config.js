const sql = require("codisql");

sql.connect({
    host: "localhost",
    username: "root",
    password: "",
    database: "amir"
});

module.exports = sql;