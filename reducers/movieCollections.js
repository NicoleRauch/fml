import { ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE } from '../actions/'

export default (
	state = [
		{
			id:673655561,
			name:'Hugo Blurays',
			movies:[
				{id:123755099,title:'2001 Odyssee im Weltraum (1968)'},{id:2081122852,title:'28 Days Later (2002)'},{id:712038390,title:'300 (2006)'},{id:1781904239,title:'96 Hours (2008)'},{id:12675280,title:'96 Hours - Taken 2 (2012)'},{id:1755485708,title:'96 Hours - Taken 3 (2015)'},{id:172680139,title:'A.I. Artificial Intelligence (2001)'},{id:797430469,title:'Alles steht Kopf'},{id:64976345,title:'American Hustle'},{id:823027633,title:'Das A-Team - Der Film (2010)'},{id:1972874617,title:'Avatar'},{id:2043226252,title:'Baymax - Riesiges Robowabohu (2014)'},{id:1381220,title:'Best Exotic Marigold Hotel 2 (2015)'},{id:534114269,title:'The Best Exotic Marigold Hotel (2011)'},{id:1261219697,title:'The Big Lebowski'},{id:2031700516,title:'Blade Trinity (2004)'},{id:831728229,title:'Blind Side - Die große Chance'},{id:203336894,title:'Der blutige Pfad Gottes 2'},{id:1698110548,title:'Der blutige Pfad Gottes'},{id:1341330113,title:'Butterfly Effect (2004)'},{id:1601280025,title:'Chappie (2015)'},{id:76770398,title:'Constantine (2005)'},{id:1799596002,title:'Django Unchained'},{id:1386890563,title:'The Dressmaker (2015)'},{id:1039118615,title:'Das Dschungelbuch (1967)'},{id:1821714795,title:'Edge Of Tomorrow'},{id:1593680148,title:'Die Entdeckung der Unendlichkeit (2014)'},{id:1414224291,title:'The Equalizer'},{id:1587118772,title:'Equilibrium'},{id:1555673623,title:'Ex Machina (2015)'},{id:903698206,title:'The Expendables 2'},{id:903698207,title:'The Expendables 3'},{id:921609740,title:'The Expendables'},{id:207252177,title:'Fack ju Göhte (2013)'},{id:1936835783,title:'Focus (2015)'},{id:328825307,title:'Das fünfte Element'},{id:2102678821,title:'The Gambler (2014)'},{id:1223362319,title:'Get the Gringo (2012)'},{id:710541006,title:'Gone Girl - Das perfekte Opfer (2014)'},{id:2067841403,title:'Good Bye Lenin'},{id:1919943363,title:'The Hateful 8 (2015)'},{id:1689424362,title:'Der Herr der Ringe - Die Gefährten'},{id:365705385,title:'Der Herr der Ringe - Die Rückkehr des Königs'},{id:1760797564,title:'Der Herr der Ringe - Die zwei Türme'},{id:1814859285,title:'Hitman (2007)'},{id:1579441212,title:'Der Hobbit - Die Schlacht der Fünf Heere (2014) EE'},{id:170173572,title:'Der Hobbit - Die Schlacht der Fünf Heere (2014)'},{id:1513062167,title:'Der Hobbit - Eine unerwartete Reise (2012) EE'},{id:1122600695,title:'Der Hobbit - Eine unerwartete Reise (2012)'},{id:1898468928,title:'Der Hobbit - Smaugs Einöde (2013) EE'},{id:2007070464,title:'Der Hobbit - Smaugs Einöde (2013)'},{id:2144846395,title:'Hostage - Entführt'},{id:138041380,title:'The Imitation Game - Ein streng geheimes Leben (2014)'},{id:958203335,title:'Inception (2010)'},{id:1195962151,title:'Iron Man (2008)'},{id:1337737264,title:'Iron Man 2 (2010)'},{id:405073164,title:'Iron Man 3 (2013)'},{id:1990089305,title:'Kingsman: The Secret Service (2015)'},{id:1561074272,title:'The Lego Movie'},{id:1805005347,title:'Machete'},{id:833216637,title:'Man lernt nie aus (2015)'},{id:1351065794,title:'Der Marsianer - Rettet Mark Watney (2015)'},{id:42488563,title:'Matrix_ac3'},{id:1997372447,title:'Matrix'},{id:619067576,title:'Matrix_Reloaded_ac3'},{id:483793271,title:'Matrix Reloaded'},{id:161614942,title:'Matrix_Revolutions_ac3'},{id:446171029,title:'Matrix Revolutions'},{id:12983667,title:'Men in Black (1997)'},{id:2040189055,title:'Men in Black 2 (2002)'},{id:297377759,title:'Men in Black 3 (2012)'},{id:1404365939,title:'Mission Impossible (1996)'},{id:1652310644,title:'Mission Impossible II (2000)'},{id:35781589,title:'Mission Impossible III (2006)'},{id:833853228,title:'Mission Impossible - Phantom Protokoll (2011)'},{id:1410833432,title:'Mission Impossible - Rogue Nation (2015)'},{id:35474895,title:'Moneyball - Die Kunst zu gewinnen'},{id:790061399,title:'Die Monster Uni (2013)'},{id:411260435,title:'New Police Story'},{id:1423791553,title:'Ninja Assassin (2009)'},{id:883168522,title:'Ostwind 2'},{id:619837022,title:'Passwort Swordfish (2001)'},{id:110014034,title:'Payback - Zahltag (1999)'},{id:1931101123,title:'Pulp Fiction'},{id:330511045,title:'John Rambo (2008)'},{id:445780845,title:'Der Richter - Recht oder Ehre (2014)'},{id:1084046114,title:'Pitch Black - Planet der Finsternis'},{id:258152756,title:'Riddick - Chroniken eines Kriegers'},{id:2133893742,title:'Riddick - Überleben ist seine Rache (2013)'},{id:363047205,title:'Run All Night (2015)'},{id:1758043078,title:'Rush - Alles für den Sieg (2013)'},{id:1082054569,title:'Safe - Todsicher (2012)'},{id:35773390,title:'The Salvation (2014)'},{id:320151535,title:'Sherlock Holmes (2009)'},{id:46538036,title:'Sherlock Holmes - Spiel im Schatten (2011)'},{id:1539352208,title:'Shooter (2007)'},{id:1001955999,title:'Sieben (1995)'},{id:1067397937,title:'Silver Linings'},{id:703550041,title:'Smokin\' Aces (2006)'},{id:1693218300,title:'Spider-Man 2'},{id:163601010,title:'Spider-Man'},{id:1052474337,title:'Star Wars Episode I - Die dunkle Bedrohung'},{id:568672980,title:'Star Wars Episode II - Angriff der Klonkrieger'},{id:2062342878,title:'Star Wars Episode III - Die Rache der Sith'},{id:353366507,title:'Star Wars Episode IV - Eine neue Hoffnung'},{id:1981767445,title:'Star Wars Episode V - Das Imperium schlägt zurück'},{id:901443692,title:'Star Wars Episode VI - Die Rückkehr der Jedi-Ritter'},{id:1931145372,title:'Star Wars Episode VII - Das Erwachen der Macht'},{id:369919739,title:'Stirb Langsam 2'},{id:989412993,title:'Stirb Langsam 4.0'},{id:452272124,title:'Stirb langsam - Ein guter Tag zum Sterben'},{id:551257759,title:'Stirb langsam - Jetzt erst recht'},{id:906876631,title:'Stirb Langsam'},{id:1700058089,title:'Tarzan (1999)'},{id:1659669378,title:'The Code - Vertraue keinem Dieb'},{id:558290743,title:'Lara Croft Tomb Raider (2001)'},{id:1489806120,title:'Lara Croft Tomb Raider - Die Wiege des Lebens (2003)'},{id:2064820292,title:'Die Tribute von Panem - Catching Fire (2013)'},{id:2065937777,title:'Die Tribute von Panem - Mockingjay Teil 1 (2014)'},{id:323127411,title:'Die Tribute von Panem - Mockingjay Teil 2 (2015)'},{id:649778635,title:'Die Tribute von Panem - The Hunger Games (2012)'},{id:640413439,title:'Tron - Legacy'},{id:589096088,title:'Breaking Dawn - Bis(s) zum Ende der Nacht - Teil 2'},{id:394584806,title:'V wie Vendetta (2005)'},{id:6902420,title:'The Walk - Eine triumphale wahre Geschichte (2015)'},{id:1698249183,title:'WALL·E - Der Letzte räumt die Erde auf (2008)'},{id:1444326283,title:'Wenn ich bleibe (2014)'},{id:1991908654,title:'Werner - Eiskalt (2011)'},{id:1388523418,title:'Werner - Gekotzt wird später (2003)'},{id:179950678,title:'Who Am I - Kein System ist sicher (2014)'},{id:695529617,title:'The Wolf of Wall Street'},{id:591343624,title:'Wolverine - Weg des Kriegers (2013)'},{id:120818026,title:'X-Men - Zukunft ist Vergangenheit (2014)'},{id:1148208717,title:'Zurück in die Zukunft (1985)'},{id:646321017,title:'Zurück in die Zukunft II (1989)'},{id:1104549322,title:'Zurück in die Zukunft III (1990)'}
			]
		}
	],
	action) => {
	switch(action.type) {
		case ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE:
			return state.concat({
				id: hashCode(action.movieCollection.name),
				name: action.movieCollection.name,
				movies: movies([], {
					type: 'ADD_MOVIES_LINE-BY-LINE',
					value: {
						movies: action.movieCollection.movies
					}
				})
			});
		default:
			return state;
	}
};


const movie = (state, action) => {
	switch(action.type) {
		case 'ADD_MOVIE':
			return {
				id: hashCode(action.title),
				title: action.title
			};
		default:
			return state;
	}
};

const movies = (state = [], action) => {
	switch(action.type) {
		case 'ADD_MOVIES_LINE-BY-LINE':
			return state.concat(action.value.movies
				.split("\n")
				.map((movieName) => movie(undefined, {
					type: 'ADD_MOVIE',
					title: movieName
				})));
		default:
			return state;
	}
};

const hashCode = (titleString) => {
	let hash = 0, length = titleString.length;
	if (length == 0) return hash;
	for (let i = 0; i < length; i++) {
		let character = titleString.charCodeAt(i);
		hash = ((hash<<5)-hash)+character;
		hash = hash & hash; // Convert to 32bit integer
	}
	return Math.abs(hash);
};
