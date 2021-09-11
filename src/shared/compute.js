import AddCommand from '../Commands/AddCommand';
import SubstractCommand from '../Commands/SubstractCommand';
import MultiplyCommand from '../Commands/MultiplyCommand';
import DivideCommand from '../Commands/DivideCommand';
import DegreeCommand from '../Commands/DegreeCommand';

const MULTIPLY = 'MULTIPLY';
const DIVISION = 'DIVISION';
const SUMMA = 'SUMMA';
const SUBTRACTION = 'SUBTRACTION';
const DEGREE = 'DEGREE';
const LEFT_BRACE = 'LEFT_BRACE';
const RIGHT_BRACE = 'RIGHT_BRACE';
const DECIMAL = 'DECIMAL';
const NUMBER = 'NUMBER';


export const Compute = function (expression) {
    // Производим лексический анализ
    let tokens = [];
    let i = 0;
    let template = '';
    for (; ;) {
        template = '';
        if (expression.charAt(i) === '') break;
        switch (expression.charAt(i)) {
        case '*':
            tokens.push({token: MULTIPLY});
            ++i;
            break;
        case '/':
            tokens.push({token: DIVISION});
            ++i;
            break;
        case '+':
            tokens.push({token: SUMMA});
            ++i;
            break;
        case '-':
            tokens.push({token: SUBTRACTION});
            ++i;
            break;
        case '^':
            tokens.push({token: DEGREE});
            ++i;
            break;
        case '(':
            tokens.push({token: LEFT_BRACE});
            ++i;
            break;
        case ')':
            tokens.push({token: RIGHT_BRACE});
            ++i;
            break;
        case ',':
            tokens.push({token: DECIMAL});
            ++i;
            break;
        default:
            // Обрабатываем число + число с точкой
            while ((/^\d$/).test(expression.charAt(i)) || (template.length > 0 && expression.charAt(i) === '.' && template.indexOf('.') === -1)) {
                template += expression.charAt(i);
                ++i;
            }
            // Если template не пуст, значит мы получили число
            if (template.length > 0) {
                tokens.push({token: NUMBER, value: template});
            }
        }
    }
    // Далее, после токенизации выполняем синтаксический анализ и сразу рассчёт
    // Анализ реализуется простеньким LL парсером
    const Parser = {
        BinaryOperator(operators, ValueFunc, CalcFunc, right_assoc) {
            let result = ValueFunc();
            if (result === false) {
                return false;
            }
            if (!right_assoc) { // Лево-ассоцитвное вычисление
                while (i < tokens.length) {
                    if (operators.indexOf(tokens[i].token) === -1) {
                        return result;
                    }
                    let op = tokens[i++].token;
                    let right = this.MulDivValue();
                    if (right === false || right === null) {
                        return right;
                    }
                    result = Number(CalcFunc(op, result, right));
                }
            } else { // Право-ассоциативное вычисление
                if (operators.indexOf(tokens[i].token) === -1) {
                    return result;
                }
                let op = tokens[i++].token;
                let right = this.BinaryOperator(ValueFunc(), CalcFunc(), right_assoc);
                if (right === false || right === null) {
                    return right;
                }
                result = Number(CalcFunc(op, result, right));
            }
            return result;
        },
        ScalarValue() {
            let va = false;
            if (tokens[i].token === NUMBER) {
                return Number(tokens[i++].value);
            } else if (tokens[i].token === SUMMA) {
                ++i;
                return this.BracketValue();
            } else if (tokens[i].token === SUBTRACTION) {
                ++i;
                va = this.BracketValue();
                if (va === false || va === null) {
                    return va;
                }
                return -va;
            } else {
                return false;
            }
        },
        FuncValue() {
            if (!(i + 1 < tokens.length && tokens[i + 1].token === LEFT_BRACE)) {
                return this.ScalarValue();
            }
            i += 2;
            let args = [];
            // eslint-disable-next-line no-constant-condition
            while (true) {
                if (tokens[i].token === RIGHT_BRACE) {
                    ++i;
                    break;
                }
                let arg = this.SumSubValue();

                if (arg === false || arg === null) {
                    return arg;
                }
                args.push(arg);
                if (i >= tokens.length) {
                    return false;
                }
                if (tokens[i].token === DECIMAL) {
                    ++i;
                }
            }
            return Number(args);
        },
        BracketValue() {
            if (i >= tokens.length) {
                return false;
            }
            if (tokens[i].token !== LEFT_BRACE) {
                return this.FuncValue();
            }
            ++i;
            let result = this.SumSubValue();
            if (i >= tokens.length || tokens[i].token !== RIGHT_BRACE) {
                return false;
            }
            ++i;
            return result;
        },
        PowValue() {
            return this.BinaryOperator([DEGREE], () => this.BracketValue(), function (op, result, right) {
                return (op === DEGREE ? new DegreeCommand(result, right).execute() : 0);
            }, false);
        },
        MulDivValue() {
            return this.BinaryOperator([MULTIPLY, DIVISION], () => this.PowValue(), function (op, result, right) {
                return (op === MULTIPLY ? new MultiplyCommand(result, right).execute() : (op === DIVISION ? new DivideCommand(result,right).execute() : 0));
            }, false);
        },
        SumSubValue() {
            return this.BinaryOperator([SUMMA, SUBTRACTION], () => this.MulDivValue(), function (op, result, right) {
                return (op === SUMMA ? new AddCommand(result,right).execute() : (op === SUBTRACTION ? new SubstractCommand(result, right).execute() : 0));
            }, false);
        },
    };
    i = 0;
    const result = Parser.SumSubValue();
    if (result === false || result === null) {
        return false;
    }
    return Number(result);
};