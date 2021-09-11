import {Compute} from './shared/compute';
import {numberElArray} from './shared/buttons';
import LogCommand from './Commands/LogCommand';
import LnCommand from './Commands/LnCommand';
import FactorialCommand from './Commands/FactorialCommand';
import './styles.css';
import PercentCommand from './Commands/PercentCommand';
import FractionCommand from './Commands/FractionCommand';
import TenDegreeCommand from './Commands/TenDegreeCommand';
import ExpCommand from './Commands/ExpCommand';


let equal = document.querySelector('.equal');
let memory = "";
let expr = document.getElementById('expr');
for (let i = 0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
        expr.innerHTML += i.toString();
    });
}

document.addEventListener('click', (event) => {
    let operations = new RegExp("/*/-/+//");
    switch (event.target.className) {
    case 'item mc': {
        memory = "";
        break;
    }
    case 'item m_plus': {
        if (memory) {
            memory = +memory + +expr.innerHTML;
        } else {
            memory = expr.innerHTML;
        }
        break;
    }
    case 'item m_minus': {
        if (memory) {
            memory = +memory - +expr.innerHTML;
        }
        break;
    }
    case 'item mr': {
        if (memory) {
            expr.innerHTML = memory;
        }
        break;
    }
    case 'item addition': {
        if (expr.innerHTML) {
            expr.innerHTML += "+";
        }
        break;
    }
    case 'item subtraction': {
        if (expr.innerHTML) {
            expr.innerHTML += "-";
        }
        break;
    }
    case 'item divide': {
        if (expr.innerHTML) {
            expr.innerHTML += "/";
        }
        break;
    }
    case 'item multiplication': {
        if (expr.innerHTML) {
            expr.innerHTML += "*";
        }
        break;
    }
    case 'item left_brace': {
        expr.innerHTML += "(";
        break;
    }
    case 'item right_brace': {
        if (expr.innerHTML) {
            expr.innerHTML += ")";
        }
        break;
    }
    case 'item number decimal': {
        if (!expr.innerHTML.includes(".")) {
            expr.innerHTML += ".";
        }
        break;
    }
    case 'item sqr': {
        if (expr.innerHTML) {
            expr.innerHTML += "^2";
        }
        break;
    }
    case 'item cbr': {
        if (expr.innerHTML) {
            expr.innerHTML += "^3";
        }
        break;
    }
    case 'item sqrt': {
        if (expr.innerHTML) {
            expr.innerHTML += "^1/2";
        }
        break;
    }
    case 'item cbrt': {
        if (expr.innerHTML) {
            expr.innerHTML += "^1/3";
        }
        break;
    }
    case 'item user_sqr': {
        if (expr.innerHTML) {
            expr.innerHTML += "^";
        }
        break;
    }
    case 'item user_sqrt': {
        if (expr.innerHTML) {
            expr.innerHTML += "^1/";
        }
        break;
    }
    case 'item exp_pow': {
        if (!expr.innerHTML || expr.innerHTML.includes(operations.toString())) {
            expr.innerHTML = '';
        } else {
            expr.innerHTML = new ExpCommand(+expr.innerHTML).execute();
        }
        break;
    }
    case 'item ten_pow': {
        if (!expr.innerHTML || expr.innerHTML.includes(operations.toString())) {
            expr.innerHTML = '';
        } else {
            expr.innerHTML = new TenDegreeCommand(+expr.innerHTML).execute();
        }
        break;
    }
    case 'item clean': {
        expr.innerHTML = "";
        break;
    }
    case 'item reverse': {
        if (expr.innerHTML > 0) {
            expr.innerHTML = "-" + expr.innerHTML;
        } else {
            expr.innerHTML = expr.innerHTML.slice(1);
        }
        break;
    }
    case 'item percent': {
        if (!expr.innerHTML || expr.innerHTML.includes(operations.toString())) {
            expr.innerHTML = '';
        } else {
            expr.innerHTML = new PercentCommand(+expr.innerHTML).execute();
        }
        break;
    }
    case 'item fraction': {
        if (!expr.innerHTML || expr.innerHTML.includes(operations.toString())) {
            return;
        } else {
            expr.innerHTML = new FractionCommand(+expr.innerHTML).execute();
        }
        break;
    }
    case 'item lg': {
        if (!expr.innerHTML || expr.innerHTML.includes(operations.toString())) {
            expr.innerHTML = '';
        } else if(+expr.innerHTML< 0) {
            expr.innerHTML = "error";
            return;
        } else {
            expr.innerHTML = new LogCommand(+expr.innerHTML).execute();
        }
        break;
    }
    case 'item ln': {
        if (!expr.innerHTML || expr.innerHTML.includes(operations.toString())) {
            expr.innerHTML = '';
        } else if(+expr.innerHTML< 0) {
            expr.innerHTML = "error";
        } else {
            expr.innerHTML = new LnCommand(+expr.innerHTML).execute();
        }
        break;
    }
    case 'item factorial': {
        if (expr.innerHTML) {
            expr.innerHTML = new FactorialCommand(+expr.innerHTML).execute();
        } else {
            return;
        }
        break;
    }
    }
});

equal.addEventListener('click', () => {
    let result = Compute(expr.innerText);
    if (String(result).includes('.') && String(result).length > 5) {
        document.getElementById('expr').innerHTML = String(result.toFixed(8));
    } else {
        document.getElementById('expr').innerHTML = String(result);
    }
});