build:
	docker build --tag frontend-react-test --file ./docker/Dockerfile "."

run:
	docker run --rm --name frontend-react -e "PORT=3000" -p 3000:3000 frontend-react-test

destroy:
	docker image rm frontend-react-test