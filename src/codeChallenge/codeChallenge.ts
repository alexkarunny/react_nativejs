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

export const isIncludes = (str: string, subStr: string):boolean => {
    let strArr = str.toLowerCase().split('')
    let subStrArr = subStr.toLowerCase().split('')
    let temp = 0
    for (let i = 0; i < subStrArr.length; i++) {
        if(strArr.includes(subStrArr[i])) ++temp
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
        if( index >= 0 ) {
            ++temp
            strArr.splice(index, 1)
        }else break
    }
    return temp === subStrArr.length
}