import AddCommand from '../Commands/AddCommand';
import SubstractCommand from '../Commands/SubstractCommand';
import MultiplyCommand from '../Commands/MultiplyCommand';
import DivideCommand from '../Commands/DivideCommand';
import FactorialCommand from '../Commands/FactorialCommand';
import SqrCommand from '../Commands/SqrCommand';
import CbrCommand from '../Commands/CbrCommand';
import UserSqrCommand from '../Commands/UserSqrCommand';
import ExpCommand from '../Commands/ExpCommand';
import TenPowCommand from '../Commands/TenPowCommand';
import FractionCommand from '../Commands/FractionCommand';
import SqrtCommand from '../Commands/SqrtCommand';
import CbrtCommand from '../Commands/CbrtCommand';
import UserSqrtCommand from '../Commands/UserSqrtCommand';
import LnCommand from '../Commands/LnCommand';
import LogCommand from '../Commands/LogCommand';

// DOM Elements
const valueEl = document.querySelector('.value');

// variables
export let valueStrInMemory = null;
export let operatorInMemory = null;
export let memoizeStrValue = null;
// Functions
export const getValueAsStr = () => valueEl.textContent.split(',').join('');

export const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
};

export const setStrAsValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.') {
        valueEl.textContent += '.';
        return;
    }
    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
        valueEl.textContent = parseFloat(wholeNumStr).toString() + '.' + decimalStr;
    } else {
        valueEl.textContent = parseFloat(wholeNumStr).toString();
    }
};

export const handleNumberClick = (numStr) => {
    const currentValueStr = getValueAsStr();
    if (valueStrInMemory) {
        setStrAsValue(numStr);
    } else if (currentValueStr === '0') {
        setStrAsValue(numStr);
    } else {
        setStrAsValue(currentValueStr + numStr);
    }
};

export const getResultOfOperationAsStr = () => {
    const currentValueNum = getValueAsNum();
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum;
    switch (operatorInMemory) {
    case 'mc': {
        memoizeStrValue = 0;
        newValueNum = valueNumInMemory;
        break;
    }
    case 'm_plus': {
        memoizeStrValue = memoizeStrValue + valueNumInMemory;
        newValueNum = valueNumInMemory;
        break;
    }
    case 'm_minus': {
        if (memoizeStrValue === 0) {
            memoizeStrValue = -valueNumInMemory;
        } else {
            memoizeStrValue = memoizeStrValue - valueNumInMemory;
            newValueNum = valueNumInMemory;
        }
        break;
    }
    case 'mr': {
        newValueNum = memoizeStrValue;
        break;
    }
    case 'addition': {
        newValueNum = new AddCommand(valueNumInMemory, currentValueNum).execute();
        break;
    }
    case 'subtraction': {
        newValueNum = new SubstractCommand(valueNumInMemory, currentValueNum).execute();
        break;
    }
    case 'multiplication': {
        newValueNum = new MultiplyCommand(valueNumInMemory, currentValueNum).execute();
        break;
    }
    case 'divide': {
        if (currentValueNum === 0) {
            newValueNum = 'error';
        } else {
            newValueNum = new DivideCommand(valueNumInMemory, currentValueNum).execute();
        }
        break;
    }
    case 'factorial': {
        newValueNum = new FactorialCommand(valueNumInMemory).execute();
        break;
    }
    case 'sqr': {
        newValueNum = new SqrCommand(valueNumInMemory).execute();
        break;
    }
    case 'cbr': {
        newValueNum = new CbrCommand(valueNumInMemory).execute();
        break;
    }
    case 'user_sqr': {
        if (currentValueNum && valueNumInMemory) {
            newValueNum = new UserSqrCommand(currentValueNum, valueNumInMemory).execute();
        }
        break;
    }
    case 'exp': {
        newValueNum = new ExpCommand(valueNumInMemory).execute();
        break;
    }
    case 'ten_pow': {
        newValueNum = new TenPowCommand(valueNumInMemory).execute();
        break;
    }
    case 'fraction': {
        if (valueNumInMemory === 0) {
            newValueNum = 'error';
        } else {
            newValueNum = new FractionCommand(valueNumInMemory).execute();
        }
        break;
    }
    case 'sqrt': {
        newValueNum = new SqrtCommand(valueNumInMemory).execute();
        break;
    }
    case 'cbrt': {
        newValueNum = new CbrtCommand(valueNumInMemory).execute();
        break;
    }
    case 'user_sqrt': {
        if (currentValueNum && valueNumInMemory) {
            newValueNum = new UserSqrtCommand(valueNumInMemory, currentValueNum).execute();
        }
        break;
    }
    case 'ln': {
        if (valueNumInMemory === 0 || valueNumInMemory < 0) {
            newValueNum = 'error';
        } else {
            newValueNum = new LnCommand(valueNumInMemory).execute();
        }
        break;
    }
    case 'lg':
        {
            if (valueNumInMemory === 0 || valueNumInMemory < 0) {
                newValueNum = 'error';
            } else {
                newValueNum = new LogCommand(valueNumInMemory).execute();
            }
        }
        break;
    }

    return newValueNum.toString();
};

export const handleOperatorClick = (operation) => {
    const currentValueStr = getValueAsStr();
    if (!valueStrInMemory) {
        valueStrInMemory = currentValueStr;
        operatorInMemory = operation;
    } else {
        valueStrInMemory = getResultOfOperationAsStr();
        operatorInMemory = operation;
        setStrAsValue(valueStrInMemory);
    }
};
