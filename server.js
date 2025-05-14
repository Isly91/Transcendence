const fastify = require('fastify')();

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
			<h1>In Pogress...</h1>
		  </body>
		</html>
	  `);
});

fastify.listen({ host: '0.0.0.0', port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at ${address}`);
});
