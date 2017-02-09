import test from '../helper/processReducerTest'

describe('process reducer', () => {
	test({elements: 1, comparisons: [true], result: 0});
	test({elements: 1, comparisons: [false], result: 1});
	test({elements: 2, comparisons: [false], result: 2});
	test({elements: 2, comparisons: [true, false], result: 1});
	test({elements: 2, comparisons: [true, true], result: 0});
	test({elements: 3, comparisons: [true, true], result: 0});
	test({elements: 3, comparisons: [true, false], result: 1});
	test({elements: 3, comparisons: [false, true], result: 2});
	test({elements: 3, comparisons: [false, false], result: 3});
});

