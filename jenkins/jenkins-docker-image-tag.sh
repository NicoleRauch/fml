echo "sudo docker tag $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER $DOCKER_REGISTRY/$JOB_NAME:latest";
sudo docker tag $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER $DOCKER_REGISTRY/$JOB_NAME:latest