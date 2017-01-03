onmessage = (e) => {
	const reader = new FileReaderSync();
	const content = reader.readAsText(e.data);
	postMessage(content);
}
