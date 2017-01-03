var whitespace="\n\r\t ";XMLP=function(a){a=SAXStrings.replace(a,null,null,"\r\n","\n"),a=SAXStrings.replace(a,null,null,"\r","\n"),this.m_xml=a,this.m_iP=0,this.m_iState=XMLP._STATE_PROLOG,this.m_stack=new Stack,this._clearAttributes()},XMLP._NONE=0,XMLP._ELM_B=1,XMLP._ELM_E=2,XMLP._ELM_EMP=3,XMLP._ATT=4,XMLP._TEXT=5,XMLP._ENTITY=6,XMLP._PI=7,XMLP._CDATA=8,XMLP._COMMENT=9,XMLP._DTD=10,XMLP._ERROR=11,XMLP._CONT_XML=0,XMLP._CONT_ALT=1,XMLP._ATT_NAME=0,XMLP._ATT_VAL=1,XMLP._STATE_PROLOG=1,XMLP._STATE_DOCUMENT=2,XMLP._STATE_MISC=3,XMLP._errs=[],XMLP._errs[XMLP.ERR_CLOSE_PI=0]="PI: missing closing sequence",XMLP._errs[XMLP.ERR_CLOSE_DTD=1]="DTD: missing closing sequence",XMLP._errs[XMLP.ERR_CLOSE_COMMENT=2]="Comment: missing closing sequence",XMLP._errs[XMLP.ERR_CLOSE_CDATA=3]="CDATA: missing closing sequence",XMLP._errs[XMLP.ERR_CLOSE_ELM=4]="Element: missing closing sequence",XMLP._errs[XMLP.ERR_CLOSE_ENTITY=5]="Entity: missing closing sequence",XMLP._errs[XMLP.ERR_PI_TARGET=6]="PI: target is required",XMLP._errs[XMLP.ERR_ELM_EMPTY=7]="Element: cannot be both empty and closing",XMLP._errs[XMLP.ERR_ELM_NAME=8]="Element: name must immediatly follow \"<\"",XMLP._errs[XMLP.ERR_ELM_LT_NAME=9]="Element: \"<\" not allowed in element names",XMLP._errs[XMLP.ERR_ATT_VALUES=10]="Attribute: values are required and must be in quotes",XMLP._errs[XMLP.ERR_ATT_LT_NAME=11]="Element: \"<\" not allowed in attribute names",XMLP._errs[XMLP.ERR_ATT_LT_VALUE=12]="Attribute: \"<\" not allowed in attribute values",XMLP._errs[XMLP.ERR_ATT_DUP=13]="Attribute: duplicate attributes not allowed",XMLP._errs[XMLP.ERR_ENTITY_UNKNOWN=14]="Entity: unknown entity",XMLP._errs[XMLP.ERR_INFINITELOOP=15]="Infininte loop",XMLP._errs[XMLP.ERR_DOC_STRUCTURE=16]="Document: only comments, processing instructions, or whitespace allowed outside of document element",XMLP._errs[XMLP.ERR_ELM_NESTING=17]="Element: must be nested correctly",XMLP.prototype._addAttribute=function(a,b){this.m_atts[this.m_atts.length]=[a,b]},XMLP.prototype._checkStructure=function(a){if(XMLP._STATE_PROLOG==this.m_iState){if((XMLP._TEXT==a||XMLP._ENTITY==a)&&-1!=SAXStrings.indexOfNonWhitespace(this.getContent(),this.getContentBegin(),this.getContentEnd()))return this._setErr(XMLP.ERR_DOC_STRUCTURE);(XMLP._ELM_B==a||XMLP._ELM_EMP==a)&&(this.m_iState=XMLP._STATE_DOCUMENT)}if(XMLP._STATE_DOCUMENT==this.m_iState){if((XMLP._ELM_B==a||XMLP._ELM_EMP==a)&&this.m_stack.push(this.getName()),XMLP._ELM_E==a||XMLP._ELM_EMP==a){var b=this.m_stack.pop();if(null==b||b!=this.getName())return this._setErr(XMLP.ERR_ELM_NESTING)}if(0==this.m_stack.count())return this.m_iState=XMLP._STATE_MISC,a}if(XMLP._STATE_MISC==this.m_iState){if(XMLP._ELM_B==a||XMLP._ELM_E==a||XMLP._ELM_EMP==a||XMLP.EVT_DTD==a)return this._setErr(XMLP.ERR_DOC_STRUCTURE);if((XMLP._TEXT==a||XMLP._ENTITY==a)&&-1!=SAXStrings.indexOfNonWhitespace(this.getContent(),this.getContentBegin(),this.getContentEnd()))return this._setErr(XMLP.ERR_DOC_STRUCTURE)}return a},XMLP.prototype._clearAttributes=function(){this.m_atts=[]},XMLP.prototype._findAttributeIndex=function(a){for(var b=0;b<this.m_atts.length;b++)if(this.m_atts[b][XMLP._ATT_NAME]==a)return b;return-1},XMLP.prototype.getAttributeCount=function(){return this.m_atts?this.m_atts.length:0},XMLP.prototype.getAttributeName=function(a){return 0>a||a>=this.m_atts.length?null:this.m_atts[a][XMLP._ATT_NAME]},XMLP.prototype.getAttributeValue=function(a){return 0>a||a>=this.m_atts.length?null:__unescapeString(this.m_atts[a][XMLP._ATT_VAL])},XMLP.prototype.getAttributeValueByName=function(a){return this.getAttributeValue(this._findAttributeIndex(a))},XMLP.prototype.getColumnNumber=function(){return SAXStrings.getColumnNumber(this.m_xml,this.m_iP)},XMLP.prototype.getContent=function(){return this.m_cSrc==XMLP._CONT_XML?this.m_xml:this.m_cAlt},XMLP.prototype.getContentBegin=function(){return this.m_cB},XMLP.prototype.getContentEnd=function(){return this.m_cE},XMLP.prototype.getLineNumber=function(){return SAXStrings.getLineNumber(this.m_xml,this.m_iP)},XMLP.prototype.getName=function(){return this.m_name},XMLP.prototype.next=function(){return this._checkStructure(this._parse())},XMLP.prototype._parse=function(){if(this.m_iP==this.m_xml.length)return XMLP._NONE;return this.m_iP==this.m_xml.indexOf("<?",this.m_iP)?this._parsePI(this.m_iP+2):this.m_iP==this.m_xml.indexOf("<!DOCTYPE",this.m_iP)?this._parseDTD(this.m_iP+9):this.m_iP==this.m_xml.indexOf("<!--",this.m_iP)?this._parseComment(this.m_iP+4):this.m_iP==this.m_xml.indexOf("<![CDATA[",this.m_iP)?this._parseCDATA(this.m_iP+9):this.m_iP==this.m_xml.indexOf("<",this.m_iP)?this._parseElement(this.m_iP+1):this.m_iP==this.m_xml.indexOf("&",this.m_iP)?this._parseEntity(this.m_iP+1):this._parseText(this.m_iP)},XMLP.prototype._parseAttribute=function(a,b){var c,d,e,f,g,h,j,l;if(this.m_cAlt="",c=SAXStrings.indexOfNonWhitespace(this.m_xml,a,b),-1==c||c>=b)return c;if(e=this.m_xml.indexOf("=",c),-1==e||e>b)return this._setErr(XMLP.ERR_ATT_VALUES);if(d=SAXStrings.lastIndexOfNonWhitespace(this.m_xml,c,e),f=SAXStrings.indexOfNonWhitespace(this.m_xml,e+1,b),-1==f||f>b)return this._setErr(XMLP.ERR_ATT_VALUES);if(h=this.m_xml.charAt(f),-1==SAXStrings.QUOTES.indexOf(h))return this._setErr(XMLP.ERR_ATT_VALUES);if(g=this.m_xml.indexOf(h,f+1),-1==g||g>b)return this._setErr(XMLP.ERR_ATT_VALUES);if(j=this.m_xml.substring(c,d+1),l=this.m_xml.substring(f+1,g),-1!=j.indexOf("<"))return this._setErr(XMLP.ERR_ATT_LT_NAME);if(-1!=l.indexOf("<"))return this._setErr(XMLP.ERR_ATT_LT_VALUE);if(l=SAXStrings.replace(l,null,null,"\n"," "),l=SAXStrings.replace(l,null,null,"\t"," "),iRet=this._replaceEntities(l),iRet==XMLP._ERROR)return iRet;if(l=this.m_cAlt,-1==this._findAttributeIndex(j))this._addAttribute(j,l);else return this._setErr(XMLP.ERR_ATT_DUP);return this.m_iP=g+2,XMLP._ATT},XMLP.prototype._parseCDATA=function(a){var b=this.m_xml.indexOf("]]>",a);return-1==b?this._setErr(XMLP.ERR_CLOSE_CDATA):(this._setContent(XMLP._CONT_XML,a,b),this.m_iP=b+3,XMLP._CDATA)},XMLP.prototype._parseComment=function(a){var b=this.m_xml.indexOf("-->",a);return-1==b?this._setErr(XMLP.ERR_CLOSE_COMMENT):(this._setContent(XMLP._CONT_XML,a,b),this.m_iP=b+3,XMLP._COMMENT)},XMLP.prototype._parseDTD=function(a){var b,c,d,e;if(b=this.m_xml.indexOf(">",a),-1==b)return this._setErr(XMLP.ERR_CLOSE_DTD);for(d=this.m_xml.indexOf("[",a),c=-1!=d&&d<b?"]>":">";!0;){if(b==e)return this._setErr(XMLP.ERR_INFINITELOOP);if(e=b,b=this.m_xml.indexOf(c,a),-1==b)return this._setErr(XMLP.ERR_CLOSE_DTD);if("]]>"!=this.m_xml.substring(b-1,b+2))break}return this.m_iP=b+c.length,XMLP._DTD},XMLP.prototype._parseElement=function(a){var b,c,d,e,f,g,h;if(c=b=this.m_xml.indexOf(">",a),-1==b)return this._setErr(XMLP.ERR_CLOSE_ELM);if("/"==this.m_xml.charAt(a)?(f=XMLP._ELM_E,a++):f=XMLP._ELM_B,"/"==this.m_xml.charAt(b-1)){if(f==XMLP._ELM_E)return this._setErr(XMLP.ERR_ELM_EMPTY);f=XMLP._ELM_EMP,c--}if(c=SAXStrings.lastIndexOfNonWhitespace(this.m_xml,a,c),1!=b-a&&SAXStrings.indexOfNonWhitespace(this.m_xml,a,c)!=a)return this._setErr(XMLP.ERR_ELM_NAME);if(this._clearAttributes(),d=SAXStrings.indexOfWhitespace(this.m_xml,a,c),-1==d)d=c+1;else for(this.m_iP=d;this.m_iP<c;){if(this.m_iP==h)return this._setErr(XMLP.ERR_INFINITELOOP);if(h=this.m_iP,e=this._parseAttribute(this.m_iP,c),e==XMLP._ERROR)return e}return(g=this.m_xml.substring(a,d),-1!=g.indexOf("<"))?this._setErr(XMLP.ERR_ELM_LT_NAME):(this.m_name=g,this.m_iP=b+1,f)},XMLP.prototype._parseEntity=function(a){var b=this.m_xml.indexOf(";",a);return-1==b?this._setErr(XMLP.ERR_CLOSE_ENTITY):(this.m_iP=b+1,this._replaceEntity(this.m_xml,a,b))},XMLP.prototype._parsePI=function(a){var b,c,d,e,f;return(b=this.m_xml.indexOf("?>",a),-1==b)?this._setErr(XMLP.ERR_CLOSE_PI):(c=SAXStrings.indexOfNonWhitespace(this.m_xml,a,b),-1==c)?this._setErr(XMLP.ERR_PI_TARGET):(d=SAXStrings.indexOfWhitespace(this.m_xml,c,b),-1==d&&(d=b),e=SAXStrings.indexOfNonWhitespace(this.m_xml,d,b),-1==e&&(e=b),f=SAXStrings.lastIndexOfNonWhitespace(this.m_xml,e,b),-1==f&&(f=b-1),this.m_name=this.m_xml.substring(c,d),this._setContent(XMLP._CONT_XML,e,f+1),this.m_iP=b+2,XMLP._PI)},XMLP.prototype._parseText=function(a){var b,c;return b=this.m_xml.indexOf("<",a),-1==b&&(b=this.m_xml.length),c=this.m_xml.indexOf("&",a),-1!=c&&c<=b&&(b=c),this._setContent(XMLP._CONT_XML,a,b),this.m_iP=b,XMLP._TEXT},XMLP.prototype._replaceEntities=function(a,b,c){if(SAXStrings.isEmpty(a))return"";b=b||0,c=c||a.length;var d,e,f="";for(d=a.indexOf("&",b),e=b;0<d&&d<c;){if(f+=a.substring(e,d),e=a.indexOf(";",d)+1,0==e||e>c)return this._setErr(XMLP.ERR_CLOSE_ENTITY);if(iRet=this._replaceEntity(a,d+1,e-1),iRet==XMLP._ERROR)return iRet;f+=this.m_cAlt,d=a.indexOf("&",e)}return e!=c&&(f+=a.substring(e,c)),this._setContent(XMLP._CONT_ALT,f),XMLP._ENTITY},XMLP.prototype._replaceEntity=function(a,b,c){if(SAXStrings.isEmpty(a))return-1;switch(b=b||0,c=c||a.length,a.substring(b,c)){case"amp":strEnt="&";break;case"lt":strEnt="<";break;case"gt":strEnt=">";break;case"apos":strEnt="'";break;case"quot":strEnt="\"";break;default:if("#"==a.charAt(b))strEnt=String.fromCharCode(parseInt(a.substring(b+1,c)));else return this._setErr(XMLP.ERR_ENTITY_UNKNOWN);}return this._setContent(XMLP._CONT_ALT,strEnt),XMLP._ENTITY},XMLP.prototype._setContent=function(a){var b=arguments;XMLP._CONT_XML==a?(this.m_cAlt=null,this.m_cB=b[1],this.m_cE=b[2]):(this.m_cAlt=b[1],this.m_cB=0,this.m_cE=b[1].length),this.m_cSrc=a},XMLP.prototype._setErr=function(a){var b=XMLP._errs[a];return this.m_cAlt=b,this.m_cB=0,this.m_cE=b.length,this.m_cSrc=XMLP._CONT_ALT,XMLP._ERROR},SAXDriver=function(){this.m_hndDoc=null,this.m_hndErr=null,this.m_hndLex=null},SAXDriver.DOC_B=1,SAXDriver.DOC_E=2,SAXDriver.ELM_B=3,SAXDriver.ELM_E=4,SAXDriver.CHARS=5,SAXDriver.PI=6,SAXDriver.CD_B=7,SAXDriver.CD_E=8,SAXDriver.CMNT=9,SAXDriver.DTD_B=10,SAXDriver.DTD_E=11,SAXDriver.prototype.parse=function(a){var b=new XMLP(a);this.m_hndDoc&&this.m_hndDoc.setDocumentLocator&&this.m_hndDoc.setDocumentLocator(this),this.m_parser=b,this.m_bErr=!1,this.m_bErr||this._fireEvent(SAXDriver.DOC_B),this._parseLoop(),this.m_bErr||this._fireEvent(SAXDriver.DOC_E),this.m_xml=null,this.m_iP=0},SAXDriver.prototype.setDocumentHandler=function(a){this.m_hndDoc=a},SAXDriver.prototype.setErrorHandler=function(a){this.m_hndErr=a},SAXDriver.prototype.setLexicalHandler=function(a){this.m_hndLex=a},SAXDriver.prototype.getColumnNumber=function(){return this.m_parser.getColumnNumber()},SAXDriver.prototype.getLineNumber=function(){return this.m_parser.getLineNumber()},SAXDriver.prototype.getMessage=function(){return this.m_strErrMsg},SAXDriver.prototype.getPublicId=function(){return null},SAXDriver.prototype.getSystemId=function(){return null},SAXDriver.prototype.getLength=function(){return this.m_parser.getAttributeCount()},SAXDriver.prototype.getName=function(a){return this.m_parser.getAttributeName(a)},SAXDriver.prototype.getValue=function(a){return this.m_parser.getAttributeValue(a)},SAXDriver.prototype.getValueByName=function(a){return this.m_parser.getAttributeValueByName(a)},SAXDriver.prototype._fireError=function(a){this.m_strErrMsg=a,this.m_bErr=!0,this.m_hndErr&&this.m_hndErr.fatalError&&this.m_hndErr.fatalError(this)},SAXDriver.prototype._fireEvent=function(a){var b,c,d=arguments,e=d.length-1;this.m_bErr||(SAXDriver.DOC_B==a?(c="startDocument",b=this.m_hndDoc):SAXDriver.DOC_E==a?(c="endDocument",b=this.m_hndDoc):SAXDriver.ELM_B==a?(c="startElement",b=this.m_hndDoc):SAXDriver.ELM_E==a?(c="endElement",b=this.m_hndDoc):SAXDriver.CHARS==a?(c="characters",b=this.m_hndDoc):SAXDriver.PI==a?(c="processingInstruction",b=this.m_hndDoc):SAXDriver.CD_B==a?(c="startCDATA",b=this.m_hndLex):SAXDriver.CD_E==a?(c="endCDATA",b=this.m_hndLex):SAXDriver.CMNT==a&&(c="comment",b=this.m_hndLex),b&&b[c]&&(0==e?b[c]():1==e?b[c](d[1]):2==e?b[c](d[1],d[2]):3==e&&b[c](d[1],d[2],d[3])))},SAXDriver.prototype._parseLoop=function(a){var b,a;for(a=this.m_parser;!this.m_bErr;)if(b=a.next(),b==XMLP._ELM_B)this._fireEvent(SAXDriver.ELM_B,a.getName(),this);else if(b==XMLP._ELM_E)this._fireEvent(SAXDriver.ELM_E,a.getName());else if(b==XMLP._ELM_EMP)this._fireEvent(SAXDriver.ELM_B,a.getName(),this),this._fireEvent(SAXDriver.ELM_E,a.getName());else if(b==XMLP._TEXT)this._fireEvent(SAXDriver.CHARS,a.getContent(),a.getContentBegin(),a.getContentEnd()-a.getContentBegin());else if(b==XMLP._ENTITY)this._fireEvent(SAXDriver.CHARS,a.getContent(),a.getContentBegin(),a.getContentEnd()-a.getContentBegin());else if(b==XMLP._PI)this._fireEvent(SAXDriver.PI,a.getName(),a.getContent().substring(a.getContentBegin(),a.getContentEnd()));else if(b==XMLP._CDATA)this._fireEvent(SAXDriver.CD_B),this._fireEvent(SAXDriver.CHARS,a.getContent(),a.getContentBegin(),a.getContentEnd()-a.getContentBegin()),this._fireEvent(SAXDriver.CD_E);else if(b==XMLP._COMMENT)this._fireEvent(SAXDriver.CMNT,a.getContent(),a.getContentBegin(),a.getContentEnd()-a.getContentBegin());else if(b==XMLP._DTD);else if(b==XMLP._ERROR)this._fireError(a.getContent());else if(b==XMLP._NONE)return},SAXStrings=function(){},SAXStrings.WHITESPACE=" \t\n\r",SAXStrings.QUOTES="\"'",SAXStrings.getColumnNumber=function(a,b){if(SAXStrings.isEmpty(a))return-1;b=b||a.length;var c=a.substring(0,b).split("\n");c[c.length-1],c.length--;var d=c.join("\n").length;return b-d},SAXStrings.getLineNumber=function(a,b){return SAXStrings.isEmpty(a)?-1:(b=b||a.length,a.substring(0,b).split("\n").length)},SAXStrings.indexOfNonWhitespace=function(a,b,c){if(SAXStrings.isEmpty(a))return-1;b=b||0,c=c||a.length;for(var d=b;d<c;d++)if(-1==SAXStrings.WHITESPACE.indexOf(a.charAt(d)))return d;return-1},SAXStrings.indexOfWhitespace=function(a,b,c){if(SAXStrings.isEmpty(a))return-1;b=b||0,c=c||a.length;for(var d=b;d<c;d++)if(-1!=SAXStrings.WHITESPACE.indexOf(a.charAt(d)))return d;return-1},SAXStrings.isEmpty=function(a){return null==a||0==a.length},SAXStrings.lastIndexOfNonWhitespace=function(a,b,c){if(SAXStrings.isEmpty(a))return-1;b=b||0,c=c||a.length;for(var d=c-1;d>=b;d--)if(-1==SAXStrings.WHITESPACE.indexOf(a.charAt(d)))return d;return-1},SAXStrings.replace=function(a,b,c,d,e){return SAXStrings.isEmpty(a)?"":(b=b||0,c=c||a.length,a.substring(b,c).split(d).join(e))},Stack=function(){this.m_arr=[]},Stack.prototype.clear=function(){this.m_arr=[]},Stack.prototype.count=function(){return this.m_arr.length},Stack.prototype.destroy=function(){this.m_arr=null},Stack.prototype.peek=function(){return 0==this.m_arr.length?null:this.m_arr[this.m_arr.length-1]},Stack.prototype.pop=function(){if(0==this.m_arr.length)return null;var a=this.m_arr[this.m_arr.length-1];return this.m_arr.length--,a},Stack.prototype.push=function(a){this.m_arr[this.m_arr.length]=a};function isEmpty(a){return null==a||0==a.length}function trim(a,b,c){if(isEmpty(a))return"";null==b&&(b=!0),null==c&&(c=!0);var d=0,e=0,f=0,g=0;if(!0==b)for(;f<a.length&&-1!=whitespace.indexOf(a.charAt(f++));)d++;if(!0==c)for(g=a.length-1;g>=d&&-1!=whitespace.indexOf(a.charAt(g--));)e++;return a.substring(d,a.length-e)}function __escapeString(a){var b=/&/g,c=/</g,d=/>/g,e=/"/g,f=/'/g;return a=a.replace(b,"&amp;"),a=a.replace(c,"&lt;"),a=a.replace(d,"&gt;"),a=a.replace(e,"&quot;"),a=a.replace(f,"&apos;"),a}function __unescapeString(a){var b=/&amp;/g,c=/&lt;/g,d=/&gt;/g,e=/&quot;/g,f=/&apos;/g;return a=a.replace(b,"&"),a=a.replace(c,"<"),a=a.replace(d,">"),a=a.replace(e,"\""),a=a.replace(f,"'"),a}SAXEventHandler=function(){this.characterData=""},SAXEventHandler.prototype.characters=function(a,b,c){this.characterData+=a.substr(b,c)},SAXEventHandler.prototype.endDocument=function(){this._handleCharacterData()},SAXEventHandler.prototype.endElement=function(){this._handleCharacterData()},SAXEventHandler.prototype.processingInstruction=function(){this._handleCharacterData()},SAXEventHandler.prototype.setDocumentLocator=function(){this._handleCharacterData()},SAXEventHandler.prototype.startElement=function(){this._handleCharacterData()},SAXEventHandler.prototype.startDocument=function(){this._handleCharacterData()},SAXEventHandler.prototype.comment=function(){this._handleCharacterData()},SAXEventHandler.prototype.endCDATA=function(){this._handleCharacterData()},SAXEventHandler.prototype.startCDATA=function(){this._handleCharacterData()},SAXEventHandler.prototype.error=function(){this._handleCharacterData()},SAXEventHandler.prototype.fatalError=function(){this._handleCharacterData()},SAXEventHandler.prototype.warning=function(){this._handleCharacterData()},SAXEventHandler.prototype._fullCharacterDataReceived=function(){},SAXEventHandler.prototype._handleCharacterData=function(){""!=this.characterData&&this._fullCharacterDataReceived(this.characterData),this.characterData=""};