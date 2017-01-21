import SuT from "../../lib/rateResultsToMovieArray";

describe("RateResultsToMovieArray", () => {

	it('should return an array', () => {
		expect(Array.isArray(SuT([]))).toBe(true);
		expect(Array.isArray(SuT())).toBe(true);
	});

	it('should return first rated movie', () => {
		const expected = ['1931101123'];
		const actual = SuT([{
			movieFromCollection: '1931101123', // Pulp Fiction
			movieFromPersonalList: undefined,
			won: true
		}]);
		expect(actual).toEqual(expected);
	});

	it('should sort two movies second lost', () => {
		const expected = ['1931101123', '1997372447'];
		const actual = SuT([{
			movieFromCollection: '1931101123', // Pulp Fiction
			movieFromPersonalList: undefined,
			won: true
		}, {
			movieFromCollection: '1997372447', // Matrix
			movieFromPersonalList: '1931101123', // Pulp Fiction
			won: false
		}]);
		expect(actual).toEqual(expected);
	});
	it('should sort two movies second won', () => {
		const expected = ['1997372447', '1931101123'];
		const actual = SuT([{
			movieFromCollection: '1931101123', // Pulp Fiction
			movieFromPersonalList: undefined,
			won: true
		}, {
			movieFromCollection: '1997372447', // Matrix
			movieFromPersonalList: '1931101123', // Pulp Fiction
			won: true
		}]);
		expect(actual).toEqual(expected);
	});

	it('should sort three movies second won, third lost/lost', () => {
		const expected = ['1997372447', '1931101123', '906876631'];
		const actual = SuT([{
			movieFromCollection: '1931101123', // Pulp Fiction
			movieFromPersonalList: undefined,
			won: true
		}, {
			movieFromCollection: '1997372447', // Matrix
			movieFromPersonalList: '1931101123', // Pulp Fiction
			won: true
		}, {
			movieFromCollection: '906876631', // Stirb Langsam
			movieFromPersonalList: '1997372447', // Matrix
			won: false
		}, {
			movieFromCollection: '906876631', // Stirb Langsam
			movieFromPersonalList: '1931101123', // Pulp Fiction
			won: false
		}]);
		expect(actual).toEqual(expected);
	});
	it('should sort three movies second won, third lost/won', () => {
		const expected = ['1997372447', '906876631', '1931101123'];
		const actual = SuT([{
			movieFromCollection: '1931101123', // Pulp Fiction
			movieFromPersonalList: undefined,
			won: true
		}, {
			movieFromCollection: '1997372447', // Matrix
			movieFromPersonalList: '1931101123', // Pulp Fiction
			won: true
		}, {
			movieFromCollection: '906876631', // Stirb Langsam
			movieFromPersonalList: '1997372447', // Matrix
			won: false
		}, {
			movieFromCollection: '906876631', // Stirb Langsam
			movieFromPersonalList: '1931101123', // Pulp Fiction
			won: true
		}]);
		expect(actual).toEqual(expected);
	});
	it('should sort three movies second won, third won', () => {
		const expected = ['906876631', '1997372447', '1931101123'];
		const actual = SuT([{
			movieFromCollection: '1931101123', // Pulp Fiction
			movieFromPersonalList: undefined,
			won: true
		}, {
			movieFromCollection: '1997372447', // Matrix
			movieFromPersonalList: '1931101123', // Pulp Fiction
			won: true
		}, {
			movieFromCollection: '906876631', // Stirb Langsam
			movieFromPersonalList: '1997372447', // Matrix
			won: true
		}]);
		expect(actual).toEqual(expected);
	});
});

