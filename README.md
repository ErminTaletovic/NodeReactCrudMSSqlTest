# NodeReactCrudMSSqlTest


MS SQL Express install

https://www.microsoft.com/en-us/sql-server/sql-server-downloads
      --Download and install

Postavke korisnika i baze 

-MS SQL Express verzija  
    -//promjena porta u  1434 
    -//localhost,1434
    -//kreiranje baze > database > Kreiranje Baze podataka.sql
    -//dodati korisika "tale"


-Konektor mssql

Postavke:
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
