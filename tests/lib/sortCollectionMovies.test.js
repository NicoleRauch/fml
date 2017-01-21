import SuT from "../../lib/sortCollectionMovies";

describe("SortCollectionMovies", () => {

	it('should return an array', () => {
		expect(Array.isArray(SuT())).toBe(true);
		expect(Array.isArray(SuT({}))).toBe(true);
	});

	it('should not change a already sorted list', () => {
		const collection = {
			movies: {
				'12675280': { title: '96 Hours - Taken 2 (2012)' },
				'64976345': { title: 'American Hustle' },
				'12983667': { title: 'Men in Black (1997)' },
				'35474895': { title: 'Moneyball - Die Kunst zu gewinnen' }
			},
			sort: "title"
		};
		const expected = [{
			"id": "12675280",
			"title": "96 Hours - Taken 2 (2012)"
		}, {
			"id": "64976345",
			"title": "American Hustle"
		}, {
			"id": "12983667",
			"title": "Men in Black (1997)"
		}, {
			"id": "35474895",
			"title": "Moneyball - Die Kunst zu gewinnen"
		}];
		expect(SuT(collection)).toEqual(expected);
	});

	it('should sort a list', () => {
		const collection = {
			movies: {
				'12675280': { title: '96 Hours - Taken 2 (2012)' },
				'12983667': { title: 'Men in Black (1997)' },
				'35474895': { title: 'Moneyball - Die Kunst zu gewinnen' },
				'64976345': { title: 'American Hustle' }
			},
			sort: "title"
		};
		const expected = [{
			"id": "12675280",
			"title": "96 Hours - Taken 2 (2012)"
		}, {
			"id": "64976345",
			"title": "American Hustle"
		}, {
			"id": "12983667",
			"title": "Men in Black (1997)"
		}, {
			"id": "35474895",
			"title": "Moneyball - Die Kunst zu gewinnen"
		}];
		expect(SuT(collection)).toEqual(expected);
	});

});

