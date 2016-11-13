echo "sudo docker-compose -p $JOB_NAME up -d";
echo "
fml:
    image: $DOCKER_REGISTRY/$JOB_NAME:latest
    ports:
        - "3000:3000"
" > docker-compose.yml
sudo docker-compose -p $JOB_NAME stop
# -v => Remove volumes associated with containers
sudo docker-compose -p $JOB_NAME rm --force -v
sudo docker-compose -p $JOB_NAME up -d --force-recreate

