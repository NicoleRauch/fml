node('master') {
	stage('Checkout') {
		checkout scm
	}

	stage('Build') {
		sh returnStatus: true, script: '''DOCKERTAG=`echo $GIT_BRANCH|cut -d\'/\' -f 2-`
		if [ $DOCKERTAG == "master" ]; then
			$DOCKERTAG = "latest"
		fi
		docker build --pull=true -t $DOCKER_REGISTRY/$JOB_NAME:$DOCKERTAG .'''
	}

	stage('Test') {
		sh returnStatus: true, script: '''DOCKERTAG=`echo $GIT_BRANCH|cut -d\'/\' -f 2-`
		if [ $DOCKERTAG == "master" ]; then
			$DOCKERTAG = "latest"
		fi
		docker run -i -rm $DOCKER_REGISTRY/$JOB_NAME:$DOCKERTAG "npm test"'''
	}
}

