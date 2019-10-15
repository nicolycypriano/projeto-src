module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'proj',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}