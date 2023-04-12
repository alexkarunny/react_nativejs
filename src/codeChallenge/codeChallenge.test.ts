
import {
    checkStart,
    getMinLengthWord,
    isIncludes,
    isIncludesOnce,
    repeatString,
    setUpperCase,
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