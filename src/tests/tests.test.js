import AddCommand from '../Commands/AddCommand';
import CbrCommand from '../Commands/CbrCommand';
import CbrtCommand from '../Commands/CbrtCommand';
import DivideCommand from '../Commands/DivideCommand';
import ExpCommand from '../Commands/ExpCommand';
import FactorialCommand from '../Commands/FactorialCommand';
import FractionCommand from '../Commands/FractionCommand';
import LnCommand from '../Commands/LnCommand';
import LogCommand from '../Commands/LogCommand';
import MultiplyCommand from '../Commands/MultiplyCommand';
import SqrCommand from '../Commands/SqrCommand';
import SqrtCommand from '../Commands/SqrtCommand';
import SubstractCommand from '../Commands/SubstractCommand';
import TenPowCommand from '../Commands/TenPowCommand';
import UserSqrCommand from '../Commands/UserSqrCommand';
import UserSqrtCommand from '../Commands/UserSqrtCommand';


test('sum of numbers should should give correct result', () => {

    const value1 = new AddCommand(3, 5).execute();
    const value2 = new AddCommand(2, 2).execute();
    expect(value1).toBe(8);
    expect(value2).toBe(4);
});

test('number in third power should give correct result', () => {

    const value1 = new CbrCommand(3).execute();
    const value2 = new CbrCommand(4).execute();
    expect(value1).toBe(27);
    expect(value1).not.toBe(26);
    expect(value2).toBe(64);
});

test('cube root of number should give correct result', () => {

    const value1 = new CbrtCommand(64).execute();
    const value2 = new CbrtCommand(27).execute();
    expect(value1).toBe(4);
    expect(value2).toBe(3);
});

test('division of numbers should give correct result', () => {

    const value1 = new DivideCommand(8, 2).execute();
    const value2 = new DivideCommand(40, 8).execute();
    expect(value1).toBe(4);
    expect(value2).toBe(5);
});

test('division of numbers should give correct result', () => {

    const value1 = new DivideCommand(8, 2).execute();
    const value2 = new DivideCommand(12, 2).execute();
    expect(value1).toBe(4);
    expect(value2).toBe(6);
});

test('some power of Euler number should give correct result', () => {

    const value = new ExpCommand(2).execute();
    expect(+value).toBe(7.3890561);
});

test('factorial of number should give correct result', () => {

    const value1 = new FactorialCommand(5).execute();
    const value2 = new FactorialCommand(3).execute();
    expect(value1).toBe(120);
    expect(value2).toBe(6);
});

test('1 divide by number should give correct result', () => {

    const value1 = new FractionCommand(5).execute();
    const value2 = new FractionCommand(10).execute();
    expect(value1).toBe(0.2);
    expect(value2).toBe(0.1);
});

test('natural logarithm should give correct result', () => {

    const value = new LnCommand(5).execute();
    expect(+value).toBe(1.60943791);
});

test('decimal logarithm should give correct result', () => {

    const value = new LogCommand(5).execute();
    expect(+value).toBe(0.69897000);
});

test('multiplication of numbers should should give correct result', () => {

    const value1 = new MultiplyCommand(3, 5).execute();
    const value2 = new MultiplyCommand(2, 2).execute();
    expect(value1).toBe(15);
    expect(value2).toBe(4);
});

test('second power of number should should give correct result', () => {

    const value1 = new SqrCommand(3).execute();
    const value2 = new SqrCommand(5).execute();
    expect(value1).toBe(9);
    expect(value2).toBe(25);
});

test('square root of number should give correct result', () => {

    const value1 = new SqrtCommand(9).execute();
    const value2 = new SqrtCommand(36).execute();
    expect(value1).toBe(3);
    expect(value2).toBe(6);
});

test('subtraction of numbers should should give correct result', () => {

    const value1 = new SubstractCommand(10, 2).execute();
    const value2 = new SubstractCommand(25, 10).execute();
    expect(value1).toBe(8);
    expect(value2).toBe(15);
});

test('power of 10 should give correct result', () => {

    const value1 = new TenPowCommand(2).execute();
    const value2 = new TenPowCommand(5).execute();
    expect(value1).toBe(100);
    expect(value2).toBe(100000);
});

test('some power of number should should give correct result', () => {

    const value1 = new UserSqrCommand(3, 3).execute();
    const value2 = new UserSqrCommand(5, 4).execute();
    expect(value1).toBe(27);
    expect(value2).toBe(625);
});

test('some root of number should give correct result', () => {

    const value = new UserSqrtCommand(27,3).execute();
    expect(value).toBe(3);
});