import SuT from "../../lib/chooseNextMoviesToCompare";

describe("ChooseNextMovie", () => {
	const sortedMovies = [{
		"id": "12675280",
		"title": "96 Hours - Taken 2 (2012)"
	}, {
		"id": "64976345",
		"title": "American Hustle"
	}, {
		"id": "1919943363",
		"title": "The Hateful 8 (2015)"
	}, {
		"id": "1997372447",
		"title": "Matrix"
	}, {
		"id": "1931101123",
		"title": "Pulp Fiction"
	}];
	it('should return an object', () => {
		expect(typeof SuT() !== undefined).toBe(true);
		expect(Array.isArray(SuT())).toBe(false);
	});

	it('should return middle element with odd-numbered movies', () => {
		const personalMovieListIds = ['1931101123'];
		const sortedMovies = [{
			"id": "12675280",
			"title": "96 Hours - Taken 2 (2012)"
		}, {
			"id": "1919943363",
			"title": "The Hateful 8 (2015)"
		}, {
			"id": "1931101123",
			"title": "Pulp Fiction"
		}];
		const process = {};
		const expected = {
			movieIdFromCollection: '1919943363',
			movieIdFromPersonalList: '1931101123'
		};
		expect(SuT(personalMovieListIds, sortedMovies, process))
			.toEqual(expected);
	});

	it('should return element "one the right" with even-numbered movies', () => {
		const personalMovieListIds = ['1931101123'];
		const sortedMovies = [{
			"id": "12675280",
			"title": "96 Hours - Taken 2 (2012)"
		}, {
			"id": "1919943363",
			"title": "The Hateful 8 (2015)"
		}, {
			"id": "1997372447",
			"title": "Matrix"
		}, {
			"id": "1931101123",
			"title": "Pulp Fiction"
		}];
		const process = {};
		const expected = {
			movieIdFromCollection: '1997372447',
			movieIdFromPersonalList: '1931101123'
		};
		expect(SuT(personalMovieListIds, sortedMovies, process))
			.toEqual(expected);
	});

});

