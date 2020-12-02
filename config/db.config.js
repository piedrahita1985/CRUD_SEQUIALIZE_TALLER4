module.exports = {
  development: {
    host: "localhost",
    username: "root",
    port: 3306,
    password: null,
    database: "alumnos_poli",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
    tester: {
      host: "localhost",
      username: "root",
      port: 3306,
      password: null,
      database: "alumnos_poli",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    },
      production: {
        host: "localhost",
        username: "root",
        port: 3306,
        password: null,
        database: "alumnos_poli",
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }

  }
};
