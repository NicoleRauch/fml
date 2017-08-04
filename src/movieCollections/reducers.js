import { combineReducers } from 'redux';

import reducer from '../createReducer';

import {
  ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE,
  ADD_MOVIECOLLECTION_BY_FILE_FINISHED,
  ADD_MOVIECOLLECTION_BY_FILE_START,
  UPDATE_MOVIECOLLECTION_BY_FILE
} from './actions';

export const hashCode = (titleString) => {
  let hash = 0, length = titleString.length;
  if (length === 0) return hash;
  for (let i = 0; i < length; i++) {
    let character = titleString.charCodeAt(i);
    hash = ((hash<<5)-hash)+character;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

const idForTitle = title => hashCode(title);

const INITIAL_STATE = {
  '673655561': {
    name: 'Hugo Blurays',
    isLoading: false,
    sort: "title",
    movies: { '1381220': {title: 'Best Exotic Marigold Hotel 2 (2015)'}, '6902420': {title: 'The Walk - Eine triumphale wahre Geschichte (2015)'}, '12675280': {title: '96 Hours - Taken 2 (2012)'}, '12983667': {title: 'Men in Black (1997)'}, '35474895': {title: 'Moneyball - Die Kunst zu gewinnen'}, '35773390': {title: 'The Salvation (2014)'}, '35781589': {title: 'Mission Impossible III (2006)'}, '42488563': {title: 'Matrix_ac3'}, '46538036': {title: 'Sherlock Holmes - Spiel im Schatten (2011)'}, '64976345': {title: 'American Hustle'}, '76770398': {title: 'Constantine (2005)'}, '110014034': {title: 'Payback - Zahltag (1999)'}, '120818026': {title: 'X-Men - Zukunft ist Vergangenheit (2014)'}, '123755099': {title: '2001 Odyssee im Weltraum (1968)'}, '138041380': {title: 'The Imitation Game - Ein streng geheimes Leben (2014)'}, '161614942': {title: 'Matrix_Revolutions_ac3'}, '163601010': {title: 'Spider-Man'}, '170173572': {title: 'Der Hobbit - Die Schlacht der Fünf Heere (2014)'}, '172680139': {title: 'A.I. Artificial Intelligence (2001)'}, '179950678': {title: 'Who Am I - Kein System ist sicher (2014)'}, '203336894': {title: 'Der blutige Pfad Gottes 2'}, '207252177': {title: 'Fack ju Göhte (2013)'}, '258152756': {title: 'Riddick - Chroniken eines Kriegers'}, '297377759': {title: 'Men in Black 3 (2012)'}, '320151535': {title: 'Sherlock Holmes (2009)'}, '323127411': {title: 'Die Tribute von Panem - Mockingjay Teil 2 (2015)'}, '328825307': {title: 'Das fünfte Element'}, '330511045': {title: 'John Rambo (2008)'}, '353366507': {title: 'Star Wars Episode IV - Eine neue Hoffnung'}, '363047205': {title: 'Run All Night (2015)'}, '365705385': {title: 'Der Herr der Ringe - Die Rückkehr des Königs'}, '369919739': {title: 'Stirb Langsam 2'}, '394584806': {title: 'V wie Vendetta (2005)'}, '405073164': {title: 'Iron Man 3 (2013)'}, '411260435': {title: 'New Police Story'}, '445780845': {title: 'Der Richter - Recht oder Ehre (2014)'}, '446171029': {title: 'Matrix Revolutions'}, '452272124': {title: 'Stirb langsam - Ein guter Tag zum Sterben'}, '483793271': {title: 'Matrix Reloaded'}, '534114269': {title: 'The Best Exotic Marigold Hotel (2011)'}, '551257759': {title: 'Stirb langsam - Jetzt erst recht'}, '558290743': {title: 'Lara Croft Tomb Raider (2001)'}, '568672980': {title: 'Star Wars Episode II - Angriff der Klonkrieger'}, '589096088': {title: 'Breaking Dawn - Bis(s) zum Ende der Nacht - Teil 2'}, '591343624': {title: 'Wolverine - Weg des Kriegers (2013)'}, '619067576': {title: 'Matrix_Reloaded_ac3'}, '619837022': {title: 'Passwort Swordfish (2001)'},
      '640413439': {title: 'Tron - Legacy'},
      '646321017': {title: 'Zurück in die Zukunft II (1989)'},
      '649778635': {title: 'Die Tribute von Panem - The Hunger Games (2012)'},
      '695529617': {title: 'The Wolf of Wall Street'},
      '703550041': {title: 'Smokin\' Aces (2006)'},
      '710541006': {title: 'Gone Girl - Das perfekte Opfer (2014)'},
      '712038390': {title: '300 (2006)'},
      '790061399': {title: 'Die Monster Uni (2013)'},
      '797430469': {title: 'Alles steht Kopf'},
      '823027633': {title: 'Das A-Team - Der Film (2010)'},
      '831728229': {title: 'Blind Side - Die große Chance'},
      '833216637': {title: 'Man lernt nie aus (2015)'},
      '833853228': {title: 'Mission Impossible - Phantom Protokoll (2011)'},
      '883168522': {title: 'Ostwind 2'},
      '901443692': {title: 'Star Wars Episode VI - Die Rückkehr der Jedi-Ritter'},
      '903698206': {title: 'The Expendables 2'},
      '903698207': {title: 'The Expendables 3'},
      '906876631': {title: 'Stirb Langsam'},
      '921609740': {title: 'The Expendables'},
      '958203335': {title: 'Inception (2010)'},
      '989412993': {title: 'Stirb Langsam 4.0'},
      '1001955999': {title: 'Sieben (1995)'},
      '1039118615': {title: 'Das Dschungelbuch (1967)'},
      '1052474337': {title: 'Star Wars Episode I - Die dunkle Bedrohung'},
      '1067397937': {title: 'Silver Linings'},
      '1082054569': {title: 'Safe - Todsicher (2012)'},
      '1084046114': {title: 'Pitch Black - Planet der Finsternis'},
      '1104549322': {title: 'Zurück in die Zukunft III (1990)'},
      '1122600695': {title: 'Der Hobbit - Eine unerwartete Reise (2012)'},
      '1148208717': {title: 'Zurück in die Zukunft (1985)'},
      '1195962151': {title: 'Iron Man (2008)'},
      '1223362319': {title: 'Get the Gringo (2012)'},
      '1261219697': {title: 'The Big Lebowski'},
      '1337737264': {title: 'Iron Man 2 (2010)'},
      '1341330113': {title: 'Butterfly Effect (2004)'},
      '1351065794': {title: 'Der Marsianer - Rettet Mark Watney (2015)'},
      '1386890563': {title: 'The Dressmaker (2015)'},
      '1388523418': {title: 'Werner - Gekotzt wird später (2003)'},
      '1404365939': {title: 'Mission Impossible (1996)'},
      '1410833432': {title: 'Mission Impossible - Rogue Nation (2015)'},
      '1414224291': {title: 'The Equalizer'},
      '1423791553': {title: 'Ninja Assassin (2009)'},
      '1444326283': {title: 'Wenn ich bleibe (2014)'},
      '1489806120': {title: 'Lara Croft Tomb Raider - Die Wiege des Lebens (2003)'},
      '1513062167': {title: 'Der Hobbit - Eine unerwartete Reise (2012) EE'},
      '1539352208': {title: 'Shooter (2007)'},
      '1555673623': {title: 'Ex Machina (2015)'},
      '1561074272': {title: 'The Lego Movie'},
      '1579441212': {title: 'Der Hobbit - Die Schlacht der Fünf Heere (2014) EE'},
      '1587118772': {title: 'Equilibrium'},
      '1593680148': {title: 'Die Entdeckung der Unendlichkeit (2014)'},
      '1601280025': {title: 'Chappie (2015)'},
      '1652310644': {title: 'Mission Impossible II (2000)'},
      '1659669378': {title: 'The Code - Vertraue keinem Dieb'},
      '1689424362': {title: 'Der Herr der Ringe - Die Gefährten'},
      '1693218300': {title: 'Spider-Man 2'},
      '1698110548': {title: 'Der blutige Pfad Gottes'},
      '1698249183': {title: 'WALL·E - Der Letzte räumt die Erde auf (2008)'},
      '1700058089': {title: 'Tarzan (1999)'},
      '1755485708': {title: '96 Hours - Taken 3 (2015)'},
      '1758043078': {title: 'Rush - Alles für den Sieg (2013)'},
      '1760797564': {title: 'Der Herr der Ringe - Die zwei Türme'},
      '1781904239': {title: '96 Hours (2008)'},
      '1799596002': {title: 'Django Unchained'},
      '1805005347': {title: 'Machete'},
      '1814859285': {title: 'Hitman (2007)'},
      '1821714795': {title: 'Edge Of Tomorrow'},
      '1898468928': {title: 'Der Hobbit - Smaugs Einöde (2013) EE'},
      '1919943363': {title: 'The Hateful 8 (2015)'},
      '1931101123': {title: 'Pulp Fiction'},
      '1931145372': {title: 'Star Wars Episode VII - Das Erwachen der Macht'},
      '1936835783': {title: 'Focus (2015)'},
      '1972874617': {title: 'Avatar'},
      '1981767445': {title: 'Star Wars Episode V - Das Imperium schlägt zurück'},
      '1990089305': {title: 'Kingsman: The Secret Service (2015)'},
      '1991908654': {title: 'Werner - Eiskalt (2011)'},
      '1997372447': {title: 'Matrix'},
      '2007070464': {title: 'Der Hobbit - Smaugs Einöde (2013)'},
      '2031700516': {title: 'Blade Trinity (2004)'},
      '2040189055': {title: 'Men in Black 2 (2002)'},
      '2043226252': {title: 'Baymax - Riesiges Robowabohu (2014)'},
      '2062342878': {title: 'Star Wars Episode III - Die Rache der Sith'},
      '2064820292': {title: 'Die Tribute von Panem - Catching Fire (2013)'},
      '2065937777': {title: 'Die Tribute von Panem - Mockingjay Teil 1 (2014)'},
      '2067841403': {title: 'Good Bye Lenin'},
      '2081122852': {title: '28 Days Later (2002)'},
      '2102678821': {title: 'The Gambler (2014)'},
      '2133893742': {title: 'Riddick - Überleben ist seine Rache (2013)'},
      '2144846395': {title: 'Hostage - Entführt'}
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE:
    case ADD_MOVIECOLLECTION_BY_FILE_START:
    case UPDATE_MOVIECOLLECTION_BY_FILE:
    case ADD_MOVIECOLLECTION_BY_FILE_FINISHED:
      return Object.assign({}, state, {
        [action.id]: movieCollection(state[action.id], action)
      });
    default:
      return state;
  }
};

const INITIAL_STATE_FOR_ACTION_ID = {
  isLoading: false,
  sort: 'title',
  movies: {},
  name: "AWESOME!! Volume I"
};

const isLoading = reducer(INITIAL_STATE_FOR_ACTION_ID.isLoading, {
  [ADD_MOVIECOLLECTION_BY_FILE_START]:    () => true,
  [UPDATE_MOVIECOLLECTION_BY_FILE]:       () => true,
  [ADD_MOVIECOLLECTION_BY_FILE_FINISHED]: () => false
});

const sort = (state = INITIAL_STATE_FOR_ACTION_ID.sort, action = {}) => {
  return state;
};

const name = (state = INITIAL_STATE_FOR_ACTION_ID.name, action = {}) => {
  switch (action.type) {
    case ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE:
      return action.movieCollection.name;
    case ADD_MOVIECOLLECTION_BY_FILE_START:
      return action.movieCollection.name;
  }
  return state;
};


const movies = (state = INITIAL_STATE_FOR_ACTION_ID.movies, action = {}) => {
  const moviesIntoOneCollection = (movies, movieObject) => Object.assign(movies, {[idForTitle(movieObject.title)]: movieObject});

  switch (action.type) {
    case ADD_MOVIECOLLECTION_WITH_MOVIES_LINE_BY_LINE:
      return action.movieCollection.movies
        .split("\n")
        .map(movieName => ({ title: movieName }))
        .reduce(moviesIntoOneCollection, {});

    case UPDATE_MOVIECOLLECTION_BY_FILE:
      return action.movieCollection.movies.reduce(moviesIntoOneCollection, {});
  }
  return state;
};


const movieCollection = combineReducers({
  isLoading,
  sort,
  movies,
  name
});
