echo "sudo docker-compose -p $JOB_NAME up -d";
echo "
fml:
    image: $DOCKER_REGISTRY/$JOB_NAME:latest
    ports:
        - "3001:3000"
" > docker-compose.yml
sudo docker-compose -p $JOB_NAME up -d

