set -x;
set -e;
echo "
webapp:
    image: $DOCKER_REGISTRY/$JOB_NAME:latest
    ports:
        - "3000:3000"
	enviornment:
		NODE_ENV: dev
" > docker-compose-dev.yml
sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml stop
# -v => Remove volumes associated with containers
sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml rm --force -v
sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml up -d --force-recreate

