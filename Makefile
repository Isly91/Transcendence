ifneq ("$(wildcard ./.env)","")
	include .env
	export
else
	$(error .env is not present in main project folder)
endif

include Makefile.specific

build:
	docker-compose -f ./docker-compose.yml build

up:
	docker-compose -f ./docker-compose.yml up

down:
	docker-compose -f ./docker-compose.yml down

stop:
	docker-compose -f ./docker-compose.yml stop

start:
	docker-compose -f ./docker-compose.yml start

logs:
	docker-compose -f ./docker-compose.yml logs -f

restart:
	docker-compose -f ./docker-compose.yml restart

down--volume:
	docker-compose -f ./docker-compose.yml down -v

rmi:
	docker rmi -f $(BACKEND_IMAGE_NAME) | true
	docker rmi -f $(FRONTEND_IMAGE_NAME) | true
	docker rmi -f $(SQLITE_IMAGE_NAME) | true

run:	build up

clean:	down--volume rmi

deep-clean:
	@docker system prune --all
	@docker builder prune --all

re:	clean run

.PHONY: build up down down--volume rmi run clean re

clean:
	docker system prune -a --volumes -f

restart: stop build run
