import { initStore } from '../store';

describe('store', () => {
	it('shouldn\'t crash on client-side initation', () => {
		// jest default testEnvironment: jsdom
		const store = initStore({}, false);
		expect(store).toBeTruthy();
		expect(store.dispatch).toBeDefined();
	})
})

