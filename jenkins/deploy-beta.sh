set -e;
echo "
webapp:
    image: $DOCKER_REGISTRY/$JOB_NAME:latest
    ports:
        - "3001:3000"
" > docker-compose-beta.yml
echo "sudo docker-compose -p "$JOB_NAME-beta" -f docker-compose-beta.yml stop";
sudo docker-compose -p "$JOB_NAME-beta" -f docker-compose-beta.yml stop
# -v => Remove volumes associated with containers
echo "sudo docker-compose --no-color -p "$JOB_NAME-beta" -f docker-compose-beta.yml rm --force -v";
sudo docker-compose --no-color -p "$JOB_NAME-beta" -f docker-compose-beta.yml rm --force -v
echo "sudo docker-compose --no-color -p "$JOB_NAME-beta" -f docker-compose-beta.yml up -d --force-recreate";
sudo docker-compose --no-color -p "$JOB_NAME-beta" -f docker-compose-beta.yml up -d --force-recreate

