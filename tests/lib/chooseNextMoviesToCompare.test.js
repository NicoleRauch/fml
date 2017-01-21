import SuT from "../../lib/chooseNextMoviesToCompare";

describe("ChooseNextMovie", () => {

	it('should return an object', () => {
		expect(typeof SuT() !== undefined).toBe(true);
		expect(Array.isArray(SuT())).toBe(false);
	});

});

