set -x;
set -e;
echo "
webapp:
    image: $DOCKER_REGISTRY/$JOB_NAME:latest
    ports:
        - "3001:3000"
" > docker-compose-beta.yml
sudo docker-compose -p "$JOB_NAME-beta" -f docker-compose-beta.yml stop
# -v => Remove volumes associated with containers
sudo docker-compose -p "$JOB_NAME-beta" -f docker-compose-beta.yml rm --force -v
sudo docker-compose -p "$JOB_NAME-beta" -f docker-compose-beta.yml up -d --force-recreate

