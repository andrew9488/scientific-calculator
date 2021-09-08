import './styles.css';
import { numberElArray } from './shared/buttons';
import {
    setStrAsValue,
    valueStrInMemory,
    operatorInMemory,
    getValueAsNum,
    getValueAsStr,
    handleOperatorClick,
    getResultOfOperationAsStr,
    memoizeStrValue,
    handleNumberClick,
} from './shared/helpers';

// Add Event Listeners to functions
document.addEventListener('click', (event) => {
    switch (event.target.className) {
    case 'item clean': {
        setStrAsValue('0');
        valueStrInMemory = null;
        operatorInMemory = null;
        break;
    }
    case 'item reverse': {
        const currentValueNum = getValueAsNum();
        const currentValueStr = getValueAsStr();

        if (currentValueStr === '-0') {
            setStrAsValue('0');
            return;
        }
        if (currentValueNum >= 0) {
            setStrAsValue('-' + currentValueStr);
        } else {
            setStrAsValue(currentValueStr.substring(1));
        }
        break;
    }
    case 'item percent': {
        const currentValueNum = getValueAsNum();
        const newValueNum = currentValueNum / 100;
        setStrAsValue(newValueNum.toString());
        valueStrInMemory = null;
        operatorInMemory = null;
        break;
    }
    case 'item addition': {
        handleOperatorClick('addition');
        break;
    }
    case 'item subtraction': {
        handleOperatorClick('subtraction');
        break;
    }
    case 'item multiplication': {
        handleOperatorClick('multiplication');
        break;
    }
    case 'item divide': {
        handleOperatorClick('divide');
        break;
    }
    case 'item factorial': {
        handleOperatorClick('factorial');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item sqr': {
        handleOperatorClick('sqr');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item cbr': {
        handleOperatorClick('cbr');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item user_sqr': {
        handleOperatorClick('user_sqr');
        break;
    }
    case 'item exp': {
        handleOperatorClick('exp');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item ten_pow': {
        handleOperatorClick('ten_pow');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item fraction': {
        handleOperatorClick('fraction');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item sqrt': {
        handleOperatorClick('sqrt');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item cbrt': {
        handleOperatorClick('cbrt');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item user_sqrt': {
        handleOperatorClick('user_sqrt');
        break;
    }
    case 'item ln': {
        handleOperatorClick('ln');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item lg': {
        handleOperatorClick('lg');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item mc': {
        handleOperatorClick('mc');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
            memoizeStrValue = null;
        }
        break;
    }
    case 'item mr': {
        handleOperatorClick('mr');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'm_plus': {
        handleOperatorClick('m_plus');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'm_minus': {
        handleOperatorClick('m_minus');
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item equal': {
        if (valueStrInMemory) {
            setStrAsValue(getResultOfOperationAsStr());
            valueStrInMemory = null;
            operatorInMemory = null;
        }
        break;
    }
    case 'item number decimal': {
        const currentValueStr = getValueAsStr();
        if (!currentValueStr.includes('.')) {
            setStrAsValue(currentValueStr + '.');
        }
        break;
    }
    }
});

// Add Event Listeners to numbers
for (let i = 0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    });
}
