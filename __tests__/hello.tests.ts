const message: string = 'hello ts-jest is fine';

describe('testing jest configuration to work with typescript', () => {
	test('hello test config ok', () => {
		expect(message).toBe('hello ts-jest is fine');
	});
});
