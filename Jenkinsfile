node('master') {
	stage('Checkout') {
		checkout scm
	}

	stage('Build') {
		sh './jenkins/jenkins-build.sh'
	}

	stage('Test') {
		sh './jenkins/jenkins-test.sh'
	}

	stage('Docker Image') {
		sh './jenkins/jenkins-docker-image-tag.sh'
		sh './jenkins/jenkins-docker-image-push.sh'
	}

	stage('docker-compose Deploy') {
		sh './jenkins/jenkins-docker-compose-deploy.sh'
	}
}

