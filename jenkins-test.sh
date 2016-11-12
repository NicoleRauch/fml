DOCKERTAG=`echo $GIT_BRANCH|cut -d\'/\' -f 2-`
if [ $DOCKERTAG == "master" ]; then
	$DOCKERTAG = "latest"
fi
docker run -i -rm $DOCKER_REGISTRY/$JOB_NAME:$DOCKERTAG "npm test"

