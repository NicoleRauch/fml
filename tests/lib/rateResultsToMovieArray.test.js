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

	it('should sort second movie behind first if it lost the comparison', () => {
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

	it('should sort second movie before first if it won the comparison', () => {
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
});
