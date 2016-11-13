node('master') {

try {
	stage('Checkout') {
		updateGitlabCommitStatus name: 'jenkins', state: 'pending'
		checkout scm
	}

	stage('Build') {
		updateGitlabCommitStatus name: 'jenkins', state: 'running'
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
		sh './jenkins/jenkins-dev-deploy.sh'
	}

	stage('External Tests') {
		sleep 30
		sh './jenkins/jenkins-external-tests.sh'
	}

	stage('Beta Deploy') {
		sh './jenkins/jenkins-beta-deploy.sh'
		updateGitlabCommitStatus name: 'jenkins', state: 'success'
	}
} catch (cerr) {
	updateGitlabCommitStatus name: 'jenkins', state: 'failed'
	throw err
}

}

