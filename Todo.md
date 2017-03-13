# ToDo

 * Implement NODE_ENV indirection, so that:
	production: local storage used for persistence (for now)
	!production: no local storage, console output and dev tools

 * Decide on proper backend for redux-storage! Ideas so far:
	filter/sort: https://www.npmjs.com/package/redux-storage-engine-jsurl
	not logged in: https://www.npmjs.com/package/redux-storage-engine-indexed-db
			or: https://www.npmjs.com/package/redux-storage-engine-localstorage
	logged in: https://www.npmjs.com/package/redux-storage-engine-remoteendpoint

