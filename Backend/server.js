const fastify = require('fastify')();
const db = require('./database/database');

fastify.register(require('./routes/index'));
fastify.register(require('./routes/users'));

process.on('SIGINT', () => {
  console.log('Shutting down server...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed');
    }
    process.exit();
  });
});

fastify.listen({ host: '0.0.0.0', port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});
