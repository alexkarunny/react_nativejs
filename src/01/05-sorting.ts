import {log} from 'util';

export const value05_05 = '05';

const name = ['Bob', 'Alex', 'Dodo']

console.log(name.sort())
//1. sort() - работает мутабельно(сортирует массив на месте),
// сортирует строки из коробки,
// т.е. без доп параметров - в порядке расположения символов юникод,
// возвращает ссылку на исходный массив


//2. для оствльных случаев необходимо передать функцию сравнения (callback)


/*const compareFunc = (a: number, b: number) => {
    // > 0 - надо переставить
    // <= 0 - порядок не меняется
    if (a > b) {
        return 999
    } else {
        return -13
    }
}*/


const compareFunc = (a:number, b:number) => a - b
const numbers = [0,5,9,8,-25]
console.log(numbers.sort(compareFunc))
//3. функция сравнения должна возвращать число большее или меньшее 0


console.log(numbers.sort(compareFunc).reverse())
//4.вместе с сорт используют reverse(выстовить по убыванию )

type Sttype = {
    name: string
    age: number
    isMarried: boolean,
    score: number
}

const students: Sttype[] = [
    {
        name: 'alex',
        age: 25,
        isMarried: false,
        score: 30
    },
    {
        name: 'sola',
        age: 34,
        isMarried: false,
        score: 324
    },
    {
        name: 'ilar',
        age: 9,
        isMarried: true,
        score: 36
    },
    {
        name: 'Alexey',
        age: 69,
        isMarried: true,
        score: 987
    },
]

const sortByName = (a: Sttype, b: Sttype) => a.name.toLowerCase() > b.name.toLowerCase() ?  1 :  -1
console.log(students.sort(sortByName))
console.log(students.sort((a,b) => a.name.localeCompare(b.name)))
//5. сортировка массива объектов по строковым значениям


console.log(students.sort((a,b) => a.age - b.age))
//6. Сортировка массива объектов по числовым значениям


//7.bubble sort
const num = [23, 65, 98, 456, 38, 345, 945, 6, 8, 56, 78] // n - 1


for (let j = 0; j < num.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < num.length - 1 - j; i++) {
        if(num[i] > num[i + 1]) {
            isSorted = false;
            //let temp = num[i]
            //num[i] = num[i + 1]
           // num[i + 1] = temp
            [num[i + 1], num[i]] = [num[i], num[i + 1]] // деструктуриванием меняем местами  , если строка начинается с круглой скобкой,а предыдущая заканчивается false, то предыдущую закончить точкойзапятой
        }
    }
    if(isSorted) break
}


console.log(num)