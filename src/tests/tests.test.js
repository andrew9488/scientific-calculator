import AddCommand from '../Commands/AddCommand';

test('sum', () => {
    const value = new AddCommand(3, 5).execute();
    expect(value()).toBe(5);
});