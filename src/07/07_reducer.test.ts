import {div, mul, salaryReducer, sub, sum} from './07_reducer';
import exp from 'constants';

test('salary count', () => {
    //1. Тестовые данные:
    const salary: number = 800
    const n: number = 200

    //2. Выполнение тестируемого кода:
    const result = sum(salary, n)

    //3. Проверка результата
    expect(result).toBe(1000)
})

test('salary substraction', () => {
    const salary: number = 1000
    const n: number = 200

    const result = sub(salary, n)
    expect(result).toBe(800)
    expect(sub(500, 100)).toBe(400)
    expect(sub(500, 200)).toBe(300)
} )

test('divide', () => {
    expect(div(100, 2)).toBe(50)
    expect(div(200, 2)).toBe(100)
})

test('multiply', () => {
    expect(mul(25, 3)).toBe(75)
})

test('reducer', () => {
    expect(salaryReducer(300, {type: 'SUM', n: 200})).toBe(500)
    expect(salaryReducer(300, {type: 'DIV', n: 200})).toBe(1.5)
    expect(salaryReducer(300, {type: 'MUL', n: 200})).toBe(60000)
    expect(salaryReducer(300, {type: 'SUB', n: 200})).toBe(100)
})