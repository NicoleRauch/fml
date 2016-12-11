set -e;
echo "
webapp:
    image: $DOCKER_REGISTRY/$JOB_NAME:latest
    ports:
        - "3000:3000"
" > docker-compose-dev.yml
echo "sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml stop";
sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml stop
# -v => Remove volumes associated with containers
echo "sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml rm --force -v";
sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml rm --force -v
echo "sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml up -d --force-recreate";
sudo docker-compose -p "$JOB_NAME-dev" -f docker-compose-dev.yml up -d --force-recreate

