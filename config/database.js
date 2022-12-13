module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "postgres"),

    connection: {
      host: env("DATABASE_HOST", "sasharespostgresserver.postgres.database.azure.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapidb"),
      user: env("DATABASE_USERNAME", "sasharespostgresadmin@sasharespostgresserver"),
      password: env("DATABASE_PASSWORD", "Jg897y4j9083u4r9834uy@"),
    },
    debug: false,
  },
});
