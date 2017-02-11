set -x;
set -e;
sudo docker build --pull=true -t $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER .

