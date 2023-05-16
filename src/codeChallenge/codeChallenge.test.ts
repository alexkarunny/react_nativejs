import {
    checkStart, feast, getBanknoteList,
    getMinLengthWord, getSquarePositiveIntegers, getSum, getTriangleType, isEvenIndexSumGreater,
    isIncludes,
    isIncludesOnce, maxSumBetweenTwoNegatives,
    repeatString, rotate, secondSymbol,
    setUpperCase, solution, sum, sumFirstNumbers,
    truncateString
} from './codeChallenge';

test('1. Repeat string', () => {
    expect(repeatString('yo', 3, ' ')).toBe('yo yo yo')
    expect(repeatString('yo', 3, ',')).toBe('yo,yo,yo')
})

test('2. Compare string with start', () => {
    expect(checkStart('Incubator', 'inc')).toBeTruthy()
    expect(checkStart('Incubator', 'yo')).toBeFalsy()
})

test('3. Cut the string', () => {
    expect(truncateString('Всем студентам инкубатора желаю удачи!', 10)).toBe('Всем студе...')
})

test('4. Shortest word in the string', () => {
    expect(getMinLengthWord('Всем студентам инкубатора желаю удачи!')).toBe('Всем')
    expect(getMinLengthWord('разбивает объект String на массив строк путём разделения строки указанной подстрокой')).toBe('на')
    expect(getMinLengthWord('')).toBe(null)
})

test('5. Capitalize first letter each word', () => {
    expect(setUpperCase('всем стУдентам инкуБатора Желаю удачИ!')).toBe('Всем Студентам Инкубатора Желаю Удачи!')
})

test('6. String includes substring', () => {
    expect(isIncludes('Incubator', 'Cut')).toBeTruthy()
    expect(isIncludes('Incubator', 'table')).toBeFalsy()
    expect(isIncludes('Incubator', 'inbba')).toBeTruthy()
    expect(isIncludes('Incubator', 'inba')).toBeTruthy()
    expect(isIncludes('Incubator', 'Incubatorrr')).toBeTruthy()
})

test('7. String includes substring once', () => {
    expect(isIncludesOnce('Incubator', 'Cut')).toBeTruthy()
    expect(isIncludesOnce('Incubator', 'table')).toBeFalsy()
    expect(isIncludesOnce('Incubator', 'inbba')).toBeFalsy()
    expect(isIncludesOnce('Incubator', 'inba')).toBeTruthy()
    expect(isIncludesOnce('Incubator', 'Incubatorrr')).toBeFalsy()
    expect(isIncludesOnce('Inrcurbator', 'Incubatorrr')).toBeTruthy()
})

test('8. first and last letters in two string should be equal', () => {
    expect(feast('great blue heron', 'garlic naan')).toBeTruthy()
    expect(feast('chickadee', 'chocolate cake')).toBeTruthy()
    expect(feast('brown bear', 'bear claw')).toBeFalsy()
})

test('9. All star code challenge#15', () => {
    expect(rotate('Hello')).toStrictEqual(['elloH', 'lloHe', 'loHel', 'oHell', 'Hello'])
    expect(rotate('')).toStrictEqual([])
})

test('10. sum(8_01)', () => {
    expect(sum(3, 5, 7, 6, 4, 9)).toBe(34)
    expect(sum(1, 1, 1, 6)).toBe(9)
})

test('11. get Triangle Type(8_02)', () => {
    expect(getTriangleType(1, 1, 1)).toBe('10')
    expect(getTriangleType(2, 3, 3)).toBe('01')
    expect(getTriangleType(3, 3, 2)).toBe('01')
    expect(getTriangleType(4, 5, 3)).toBe('11')
    expect(getTriangleType(10, 2, 2)).toBe('00')
})

test('12. get Sum(8_03) ', () => {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})

test('13. is Even Sum Greater(8_04)', () => {
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 300, 4])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 4])).toBe(true)
})

test('14. get Square Only Of Positive Integers(8_05)', () => {
    const array = [4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]
    const len = array.length
    const result = getSquarePositiveIntegers(array)
    expect(result === array).toBe(false)
    expect(array.length).toBe(len)
    expect(result.length).toBe(3)
    expect(result[0]).toBe(16)
    expect(result[1]).toBe(100)
    expect(result[2]).toBe(36)
})

test('sum of first N numbers(8_06)', () => {
    expect(sumFirstNumbers(0)).toBe(0)
    expect(sumFirstNumbers(4)).toBe(10)
    expect(sumFirstNumbers(10)).toBe(55)
})

test('get banknote list(8_07)', () => {
    // надо бы проверять длинну резалтов и их сумму
    const result2500 = getBanknoteList(2500)
    const result23 = getBanknoteList(23)
    expect(result2500[0]).toBe(1000)
    expect(result2500[1]).toBe(1000)
    expect(result2500[2]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)
})

test('Find the index of the second occurrence of a letter in a string', () => {
    expect(secondSymbol('Hello world!!!','l')).toBe(3)
    expect(secondSymbol('Hello world!!!','o')).toBe(7)
    expect(secondSymbol('Hello world!!!','A')).toBe(-1)
    expect(secondSymbol('','l')).toBe(-1)
    expect(secondSymbol('Hello','!')).toBe(-1)
})

test('Max sum between two negatives', () => {
    expect(maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7])).toBe(8)
    expect(maxSumBetweenTwoNegatives([5,-1,-2])).toBe(0)
    expect(maxSumBetweenTwoNegatives([1,-2])).toBe(-1)
})

test('Millipede of words, chain of words', () => {
    expect(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"])).toBe(true)
    expect(solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"])).toBe(false)
    expect(solution(["screen", "desire", "theater", "excess", "night"])).toBe(true)
    expect(solution(["engine", "endure", "elite", "excess"])).toBe(true)
    expect(solution(["east", "e", "e", "t", "t", "e", "time"])).toBe(true)
    expect(solution(["no", "dog", "on", "good"])).toBe(false)
    expect(solution(['effort', 'example', 'transport', 'example'])).toBe(true)
})