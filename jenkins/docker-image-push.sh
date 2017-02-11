set -x;
set -e;
sudo docker push $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER
sudo docker push $DOCKER_REGISTRY/$JOB_NAME:latest

