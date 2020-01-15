module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'lucas-db',
  port: 5439,
  define: {
    timestamp: true, // para created_at e updated_at
    // underscored: true,
  },
};
