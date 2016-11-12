node('master') {
	stage('Checkout') {
		checkout scm
	}

	stage('Build') {
		sh './jenkins-build.sh'
	}

	stage('Test') {
		sh './jenkins-test.sh'
	}

	stage('Docker Image') {
		sh './jenkins-docker-image-tag.sh'
		sh './jenkins-docker-image-push.sh'
	}

	stage('docker-compose Deploy') {
		sh './jenkins-docker-compose-deploy.sh'
	}
}

