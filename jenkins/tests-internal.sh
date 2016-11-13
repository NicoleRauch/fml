echo "sudo docker run -i --rm $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER npm test";
sudo docker run -i --rm $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER npm test

