build:
	docker build -t transcendence .

run:
	docker run -p 3000:3000 --name transcendence transcendence

stop:
	docker stop transcendence || true
	docker rm transcendence || true

clean:
	docker system prune -a --volumes -f

restart: stop build run
