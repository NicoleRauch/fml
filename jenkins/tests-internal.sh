echo "sudo docker run -i --rm $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER npm test";
ID=`sudo docker run -i $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER npm test`
sudo docker cp $ID:coverage/ $WORKSPACE
sudo docker stop $ID
sudo docker rm --force $ID

