echo "sudo docker push $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER";
echo "sudo docker push $DOCKER_REGISTRY/$JOB_NAME:latest";
sudo docker push $DOCKER_REGISTRY/$JOB_NAME:$BUILD_NUMBER
sudo docker push $DOCKER_REGISTRY/$JOB_NAME:latest

