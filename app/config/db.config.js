module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "tale",
    PASSWORD: "Tale1234Demo!",
    DB: "Tale_Demo_Ex_db",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };