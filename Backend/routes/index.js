async function indexRoutes(fastify, options) {
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
  }
  
module.exports = indexRoutes;  