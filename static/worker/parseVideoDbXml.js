onmessage = (e) => {
	const reader = new FileReaderSync();
	const content = reader.readAsText(e.data);
	const regex = new RegExp(/<\/?videodb>|<\/?movie>|<\/?title>|<\/?id>|<\/?originaltitle>|<\/?year>|<\/?set>|<\/?tagline>|<\/?genre>|<\/?art>|<\/?fanart>|<\/?poster>|<\/?runtime>|<\/?mpaa>|<\/?playcount>/);
	const regexTvShow = new RegExp(/<\/?tvshow>/);
	let tvShowLine = Number.POSITIVE_INFINITY;
	const regExApostroph = /&apos;/;
	const expApostroph = new RegExp(regExApostroph);
	const strippedContent = content
		.split('\n')
		.map((line, index) => {
			if(regex.exec(line) && index < tvShowLine) {
				if(expApostroph.exec(line)) {
					return line.replace(regExApostroph, "'");
				}
				return line;
			} else if(regexTvShow.exec(line)) {
				tvShowLine = index;
			}
		})
		.concat("</videodb>")
		.join('\n');

	importScripts('/static/minifiedWorker/xmlsax.js');

	let movie = {};
	let currentTag = ""
	SAXEventHandler.prototype.startElement = function(name, atts) {
		currentTag = name;
	}
	SAXEventHandler.prototype.characters = function(data, start, length) {
		const value = data.substr(start, length);
		if(value.trim().length <= 0) {
			return;
		}

		if(currentTag === "genre") {
			if(!movie.genre) {
				movie.genre = new Array();
			}
			movie.genre.push(value);
			return;
		}

		movie[currentTag] = value;
	}
	SAXEventHandler.prototype.endElement = function(name) {
		if(name === "movie") {
			postMessage({
				imdbId: movie.id,
				title: movie.title,
				originaltitle: movie.originaltitle,
				year: movie.year,
				set: movie.set,
				tagline: movie.tagline,
				genre: movie.genre,
				fanart: movie.fanart,
				poster: movie.poster,
				runtime: movie.runtime,
				mpaa: movie.mpaa,
				watched: (Number.parseInt(movie.playcount) > 0)
			});
		}
	}
	SAXEventHandler.prototype.endDocument = function() {
		postMessage({event: "finished"});
	}

	const parser = new SAXDriver();
	const eventHandler = new SAXEventHandler();
	parser.setDocumentHandler(eventHandler);
	parser.setLexicalHandler(eventHandler);
	parser.setErrorHandler(eventHandler);
	parser.parse(strippedContent);
}

