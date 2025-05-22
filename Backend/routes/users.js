const db = require('../database/database');

async function userRoutes(fastify, options) {
  fastify.get('/users', async (request, reply) => {
    return new Promise((resolve, reject) => {
      db.all('SELECT id, name, email FROM users', [], (err, rows) => {
        if (err) {
          reject(reply.status(500).send({ error: 'Database error' }));
        } else {
          resolve(reply.send(rows));
        }
      });
    });
  });
}

module.exports = userRoutes;