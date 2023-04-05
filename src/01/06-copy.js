export const value06_06 = '06';

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 210,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 135,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 95,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 146,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 240,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 239,
    },
    {
        name: "dereca",
        age: 21,
        isMarried: false,
        scores: 30,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/

//1. Поверхностная копия student

const copyUser = {...user};
console.log(user === copyUser) //false
console.log(user.friends === copyUser.friends) //true

//2. Полная (глубокая) копия student
const deepCopyStudent = {...user, friends: [...user.friends]}
console.log(user === deepCopyStudent); // false
console.log(user.friends === deepCopyStudent.friends);// false

//3. Поверхностная копия students
const copyStudents = [...students]
console.log(students === copyStudents); //false
console.log(students[0] === copyStudents[0]); //true

//4*. Полная (глубокая) копия students
const deepCopyStudents = students.map(s => ({...s}))
console.log(students === deepCopyStudents); //false
console.log(students[0] === deepCopyStudents[0]); //false
console.log(students);
console.log(deepCopyStudents);

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
const sortByScore = students.map(s => ({...s})).sort((a, b) => b.scores - a.scores)
console.log(sortByScore);
//5a. Отсортируйте студентов по алфавиту

const sortedByName = students.map(s => ({...s})).sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
const sortedByName2 = students.map(s => ({...s})).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
console.log(sortedByName);
console.log(sortedByName2);

//6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter(s => s.scores > 100)
console.log(bestStudents);

//6a.Сформируйте массив из трёх лучших студентов
const topStudents = deepCopyStudents.sort((a, b) => b.scores - a.scores).splice(0, 3);
console.log(topStudents);
console.log(deepCopyStudents);

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки
const newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents);

//7. Сформируйте массив холостых студентов
const notMarriedStudents = students.filter(s => s.isMarried)
console.log(notMarriedStudents);

//8. Сформируйте массив имён студентов
const studentsNames = students.map(s => s.name)
console.log(studentsNames);

//8a. Сформируйте строку из имён студентов, разделённых
const nameWithSpace = students.map(s => s.name).join(' ')
const namesWithComma = students.map(s => s.name).join(', ')
// - пробелом
// - запятой

console.log(nameWithSpace);

console.log(namesWithComma);

//9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map(s => ({...s, isStudent: true}))
console.log(trueStudents);

//10. Nick женился. Выполните преобразование массива students

const studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s)
console.log(studentsWithMarriedNick);

//11. Найдите Студентку по имени Ann
const ann = students.filter(s => s.name === 'Ann')
console.log(ann);
console.log(students);

//12. Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, item) => item.scores > acc.scores ? item : acc)
console.log(bestStudent);

//12a. Найдите 2 студента с самым высоким баллом

const best2Student = students.reduce((acc, item, index, arr) => {

    let temp = acc

    if (item.scores > temp[0].scores) {
        if (temp[0].scores > temp[1].scores) temp[1] = temp[0]
        temp[0] = item
    } else if (item.scores < temp[0].scores && item.scores > temp[1].scores) temp[1] = item

    return temp
}, [{scores: 0}, {scores: 0}])

console.log(best2Student)

//13. Найдите сумму баллов всех студентов

const scoresSum = students.reduce((acc, item) => acc + item.scores, 0)

console.log(scoresSum);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends = (arr) => {
    const friends = arr.map(a => a.name)
    return arr
        .map(a => ({
                ...a, friends: friends
                    .filter(f => f !== a.name)
            }
        ))
}

console.log(addFriends(students));
