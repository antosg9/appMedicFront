FRONT_IMAGE=app-medic-front
FRONT_CONTAINER=app-medic-front

.PHONY: all  setup-front  build-front  start-front start stop pre-commit clean



setup-front:
	cd npm install



build-front: setup-front
	docker build -t $(FRONT_IMAGE) .

start-front:
	docker run -d --name $(FRONT_CONTAINER) -p 443:443 $(FRONT_IMAGE)

start:  start-front

stop:
	docker stop $(FRONT_CONTAINER) || true
	docker rm $(FRONT_CONTAINER) || true

pre-commit:
	pre-commit run --all-files

clean: stop
	docker rmi  $(FRONT_IMAGE) || true

all: build-front
