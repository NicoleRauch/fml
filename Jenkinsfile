node('linux') {
	stage('Checkout') {
		checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://gitlab.christophhaefner.de/web/fml.git']]])
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

