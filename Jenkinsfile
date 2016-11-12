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

	stage('Docker Image Tag') {
		sh './jenkins-docker-image-tag.sh'
	}
}

