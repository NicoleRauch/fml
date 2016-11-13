node('master') {
	stage('Checkout') {
		checkout scm
	}

	stage('Build') {
		sh './jenkins/jenkins-build.sh'
	}

	stage('Internal Tests') {
		sh './jenkins/jenkins-internal-tests.sh'
	}

	stage('Docker Image') {
		sh './jenkins/jenkins-docker-image-tag.sh'
		sh './jenkins/jenkins-docker-image-push.sh'
	}

	stage('Dev Deploy') {
		sh './jenkins/jenkins-docker-compose-deploy.sh'
	}
}

