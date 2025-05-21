const fastify = require('fastify')();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Ensure the data directory exists
const dataDir = path.resolve(__dirname, 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'database.sqlite');
console.log('Database path:', dbPath);

// Initialize SQLite database
db = new sqlite3.Database(dbPath, (err) => {
	  if (err) {
	console.error('Error opening database:', err);
  } else {
	console.log('Connected to the SQLite database.');
  }
});

db.serialize(() => {
	  // Create a table if it doesn't exist
  db.run(`CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE
  )`, (err) => {
	if (err) {
	  console.error('Error creating table:', err);
	} else {
	  console.log('Table created or already exists.');
	}
  });
});
  

fastify.get('/', async (request, reply) => {
  reply.type('text/html').send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PONG</title>
      </head>
      <body>
        <h1>Backend</h1>
      </body>
    </html>
  `);
});

// Gracefully close the database on shutdown
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

// Start the Fastify server
fastify.listen({ host: '0.0.0.0', port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});
