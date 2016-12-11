set -e;
echo "sudo docker run -d $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER";
ID=`sudo docker run -d $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER`
echo "sudo docker exec -i $ID npm test;";
sudo docker exec -i $ID npm test;
echo "sudo docker cp $ID:/usr/src/app/coverage/ $WORKSPACE/";
sudo docker cp $ID:/usr/src/app/coverage/ $WORKSPACE/
echo "sudo docker stop $ID";
sudo docker stop $ID
echo "sudo docker rm --force $ID";
sudo docker rm --force $ID

