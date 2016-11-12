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
}

