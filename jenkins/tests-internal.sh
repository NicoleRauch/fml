set -e;
echo "sudo docker run -i $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER bash -c 'npm test'";
ID=`sudo docker run -i $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER bash -c 'npm test'`
echo "sudo docker cp $ID:coverage/ $WORKSPACE";
sudo docker cp $ID:coverage/ $WORKSPACE
echo "sudo docker stop $ID";
sudo docker stop $ID
echo "sudo docker rm --force $ID";
sudo docker rm --force $ID

