set -x;
set -e;

# Define cleanup, no matter how the script exits
trap '
sudo docker stop $ID
sudo docker rm --force $ID' EXIT

ID=`sudo docker run -d $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER`
sudo docker exec -i $ID npm test;
sudo docker cp $ID:/usr/src/app/coverage/ $WORKSPACE/

