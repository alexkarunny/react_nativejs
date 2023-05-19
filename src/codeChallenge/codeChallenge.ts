export const CODE_CHALLENGE = 'CODE-CHALLENGE'
//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

export const repeatString = (str: string, num: number, separator: string): string => {
    const temp = []
    for (let i = 0; i < num; i++) {
        temp.push(str)
    }
    return temp.join(separator)
}

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

export const checkStart = (str: string, subStr: string): boolean => {
    return str
        .toLowerCase()
        .startsWith(subStr.toLowerCase())
}

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

export const truncateString = (str: string, num: number): string => {
    return str
        .slice(0, num)
        .concat('...')
}

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

export const getMinLengthWord = (str: string): string | null => {
    if (str === '') return null

    return str
        .split(' ')
        .reduce((acc, item) => acc.length > item.length ? item : acc)
}

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

export const setUpperCase = (str: string): string => {
    return str
        .split(' ')
        .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join(' ')
}

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

export const isIncludes = (str: string, subStr: string): boolean => {
    let strArr = str.toLowerCase().split('')
    let subStrArr = subStr.toLowerCase().split('')
    let temp = 0
    for (let i = 0; i < subStrArr.length; i++) {
        if (strArr.includes(subStrArr[i])) ++temp
        else break
    }
    return temp === subStrArr.length
}

export const isIncludesOnce = (str: string, subStr: string): boolean => {
    let strArr = str.toLowerCase().split('')
    let subStrArr = subStr.toLowerCase().split('')
    let temp = 0

    for (let i = 0; i < subStrArr.length; i++) {
        let index = strArr.indexOf(subStrArr[i])
        if (index >= 0) {
            ++temp
            strArr.splice(index, 1)
        } else break
    }
    return temp === subStrArr.length
}

export const feast = (strOne: string, strTwo: string): boolean => {
    return strOne[0] === strTwo[0] && strOne[strOne.length - 1] === strTwo[strTwo.length - 1]
}

export const rotate = (word: string): string[] => {
    let arr = []
    let temp = word
    for (let i = 0; i < word.length; i++) {
        temp = temp.slice(1) + temp[0]
        arr.push(temp)
    }
    return arr
}

//8 занятие
// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, item) => acc + item)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (a + b < c || a + c < b || b + c < a) return '00'
    if (a === b && a === c) return '10'
    else if (a === b || a === c || c === b) return '01'
    return '11'
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return String(number)
        .split('')
        .reduce((acc, item) => Number(acc) + Number(item), 0)
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let sumEven = 0
    let sumOdd = 0

    for (let i = 0; i < arr.length; i += 2) {
        sumEven += arr[i]
    }

    for (let i = 1; i < arr.length; i += 2) {
        sumOdd += arr[i]
    }

    return sumEven > sumOdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && Number.isInteger(array[i])) arr.push(Math.pow(array[i], 2))
    }

    return arr
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let num = N * (N + 1) / 2

    return num
}

// ...и "лапку" вверх!!!!

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    let arr = []
    let tempSum = amountOfMoney
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

    for (let i = 0; i < banknotes.length; i++) {
        if (tempSum === 0) break
        if (tempSum < banknotes[i]) continue
        else {
            arr.push(banknotes[i])
            tempSum -= banknotes[i]
            i--
        }
    }

    return arr
}

export const secondSymbol = (s: string, symbol: string): number => {
    let firstIncl = s.indexOf(symbol)
    if (firstIncl === -1) return -1
    else return s.indexOf(symbol, firstIncl + 1)
}

export const maxSumBetweenTwoNegatives = (a: number[]): number => {
    let finallySum = -1
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            let newsum = 0
            for (let j = i + 1; j < a.length; j++) {
                if (a[j] > 0) {
                    newsum += a[j]
                } else if (a[j] < 0) {
                    if (newsum > finallySum) finallySum = newsum
                    break
                }
            }
        }
    }

    return finallySum
}

export const solution = (words: string[]) => {

    // @ts-ignore
    function getPermutations(arr) {
        if (arr.length === 1) {
            return [arr];
        } else {
            let result = [];
            for (let i = 0; i < arr.length; i++) {
                let rest = arr.slice(0, i).concat(arr.slice(i+1));
                // @ts-ignore
                let permutations = getPermutations(rest);
                for (let j = 0; j < permutations.length; j++) {
                    result.push([arr[i]].concat(permutations[j]));
                }
            }
            return result;
        }
    }
    let newArr = getPermutations(words)

   for (let i = 0; i < newArr.length; i++) {
       let temp = 0
        for (let j = 0; j < newArr[i].length - 1; j++) {

            if (newArr[i][j][newArr[i][j].length - 1] === newArr[i][j + 1][0]) {
                ++temp
            }
            else break
        }

        if (newArr[i].length - 1 === temp) return true
    }
    return false

;

}

export const draw = (deck: string[] ): string[] => {
    const drawnCards: string[] = [];
    for (let i = 0; i < deck.length; i++) {
        debugger
        if(deck.length === 1 ) drawnCards.push(deck[0])
        else {
            let tempArr = deck.splice(0, 2)
            drawnCards.push(tempArr[0])
            deck.push(tempArr[1])
            i = -1
        }
    }
    return drawnCards;
};

// @ts-ignore
export const prepareDeck = (drawnCards ) => {

    const deck = [];

    for (let i = 0; i < drawnCards.length; i++) {

        deck.unshift(drawnCards.pop())

        deck.splice(1, 0, deck.pop())
        i = -1
    }

    return deck;
};




