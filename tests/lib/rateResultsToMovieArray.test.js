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
});
