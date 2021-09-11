import AddCommand from '../Commands/AddCommand';
import DivideCommand from '../Commands/DivideCommand';
import MultiplyCommand from '../Commands/MultiplyCommand';
import DegreeCommand from '../Commands/DegreeCommand';
import SubstractCommand from '../Commands/SubstractCommand';
import FactorialCommand from '../Commands/FactorialCommand';
import LnCommand from '../Commands/LnCommand';
import LogCommand from '../Commands/LogCommand';
import PercentCommand from '../Commands/PercentCommand';
import FractionCommand from '../Commands/FractionCommand';
import TenDegreeCommand from '../Commands/TenDegreeCommand';
import ExpCommand from '../Commands/ExpCommand';

test('sum of numbers should should give correct result', () => {

    const value1 = new AddCommand(3, 5).execute();
    const value2 = new AddCommand(2, 2).execute();
    expect(value1).toBe(8);
    expect(value2).toBe(4);
});

test('division of numbers should give correct result', () => {

    const value1 = new DivideCommand(8, 2).execute();
    const value2 = new DivideCommand(40, 8).execute();
    expect(value1).toBe(4);
    expect(value2).toBe(5);
});

test('multiplication of numbers should should give correct result', () => {

    const value1 = new MultiplyCommand(3, 5).execute();
    const value2 = new MultiplyCommand(2, 2).execute();
    expect(value1).toBe(15);
    expect(value2).toBe(4);
});

test('second power of number should should give correct result', () => {

    const value1 = new DegreeCommand(3, 2).execute();
    const value2 = new DegreeCommand(5, 4).execute();
    expect(value1).toBe(9);
    expect(value2).toBe(625);
});

test('subtraction of numbers should should give correct result', () => {

    const value1 = new SubstractCommand(10, 2).execute();
    const value2 = new SubstractCommand(25, 10).execute();
    expect(value1).toBe(8);
    expect(value2).toBe(15);
});

test('factorial of number should give correct result', () => {

    const value1 = new FactorialCommand(5).execute();
    const value2 = new FactorialCommand(3).execute();
    expect(value1).toBe(120);
    expect(value2).toBe(6);
});

test('natural logarithm should give correct result', () => {

    const value = new LnCommand(5).execute();
    expect(+value).toBe(1.60943791);
});

test('decimal logarithm should give correct result', () => {

    const value = new LogCommand(5).execute();
    expect(+value).toBe(0.69897000);
});
test('percent should give correct result', () => {

    const value = new PercentCommand(5).execute();
    expect(+value).toBe(0.05);
});
test('1 divide by number should give correct result', () => {

    const value1 = new FractionCommand(5).execute();
    const value2 = new FractionCommand(10).execute();
    expect(value1).toBe(0.2);
    expect(value2).toBe(0.1);
});

test('power of 10 should give correct result', () => {

    const value1 = new TenDegreeCommand(2).execute();
    const value2 = new TenDegreeCommand(5).execute();
    expect(value1).toBe(100);
    expect(value2).toBe(100000);
});

test('some power of Euler number should give correct result', () => {

    const value = new ExpCommand(2).execute();
    expect(+value).toBe(7.3890561);
});