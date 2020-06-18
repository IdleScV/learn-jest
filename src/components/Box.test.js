import { add, total } from './Box.component.jsx';

// This is a unit test because this only tests one thing (add function)
test('add', () => {
	expect(add(1, 2)).toBe(3);
	expect(add(3, 2)).toBe(5);
	expect(add(3, 2)).toBe(5);
});

// This is an integration test.
test('total', () => {
	expect(total(1, 2)).toBe('$ 3');
});
