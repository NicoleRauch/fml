onmessage=a=>{const b=new FileReaderSync,c=b.readAsText(a.data);importScripts("/static/minifiedWorker/xmlsax.js");let d={},f="";SAXEventHandler.prototype.startElement=function(i){f=i},SAXEventHandler.prototype.characters=function(i,j,k){const l=i.substr(j,k);return 0>=l.trim().length?void 0:"genre"===f?(d.genre||(d.genre=[]),void d.genre.push(l)):void(d[f]=l)},SAXEventHandler.prototype.endElement=function(i){"movie"===i&&postMessage({imdbId:d.id,title:d.title,originaltitle:d.originaltitle,year:d.year,set:d.set,tagline:d.tagline,genre:d.genre,fanart:d.fanart,poster:d.poster,runtime:d.runtime,mpaa:d.mpaa})};const g=new SAXDriver,h=new SAXEventHandler;g.setDocumentHandler(h),g.setLexicalHandler(h),g.setErrorHandler(h),g.parse(c)};