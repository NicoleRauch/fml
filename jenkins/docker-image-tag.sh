set -x;
set -e;
sudo docker tag $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER $DOCKER_REGISTRY/$JOB_NAME:latest
