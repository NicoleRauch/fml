DOCKERTAG=`echo $GIT_BRANCH|cut -d\'/\' -f 2-`
if [ $DOCKERTAG == "master" ]; then
	$DOCKERTAG = "latest"
fi
docker build --pull=true -t $DOCKER_REGISTRY/$JOB_NAME:$DOCKERTAG .

