export default (state,action) => {
	return {
		nodeEnv: process.env.NODE_ENV,
		version: process.env.npm_package_version,
		gitHash: process.env.npm_package_gitHead,
		jenkinsBuildNumber: process.env.BUILD_NUMBER,
		jenkinsBuildTag: process.env.BUILD_TAG
	}
};

