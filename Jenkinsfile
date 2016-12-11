node('master') {

try {
	stage('Checkout') {
		updateGitlabCommitStatus name: 'jenkins', state: 'pending'
		checkout scm
	}

	stage('Build') {
		updateGitlabCommitStatus name: 'jenkins', state: 'running'
		sh './jenkins/build.sh'
	}

	stage('Internal Tests') {
		sh './jenkins/tests-internal.sh'
		archiveArtifacts artifacts: 'coverage/**'
//		step([$class: 'CloverPublisher', cloverReportDir: 'coverage/', cloverReportFileName: 'clover.xml'])
/*
java.lang.NullPointerException
	at hudson.plugins.clover.CloverPublisher.processCloverXml(CloverPublisher.java:250)
	at hudson.plugins.clover.CloverPublisher.performImpl(CloverPublisher.java:202)
	at hudson.plugins.clover.CloverPublisher.perform(CloverPublisher.java:167)
*/
	}

	stage('Docker Image') {
		sh './jenkins/docker-image-tag.sh'
		sh './jenkins/docker-image-push.sh'
	}

	stage('Dev Deploy') {
		sh './jenkins/deploy-dev.sh'
	}

	stage('External Tests') {
		sleep 30
		sh './jenkins/tests-external.sh'
	}

	stage('Beta Deploy') {
		sh './jenkins/deploy-beta.sh'
		updateGitlabCommitStatus name: 'jenkins', state: 'success'
	}
} catch (err) {
	updateGitlabCommitStatus name: 'jenkins', state: 'failed'
	throw err
}

}

