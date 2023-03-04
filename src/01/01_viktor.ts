const a = [, 0, 24, 65];
const b = 15

a[0] = 25
a[1] = 65


console.log(Array.isArray(b))

export const value_01_viktor = '01_viktor'

//CRUD

//add

const students = [
    {
        name: 'Alex',
        age: 25,
    },
    {
        name: 'Ivan',
        age: 30,
    }
]

const newSt = {
    name: 'Alexey',
    age: 62
}

const newStudents = [...students, newSt]

//update

const copyStudents2 = newStudents.map(st => st.name === 'Alexey' ? {...st,  name: 'Julia'} : st)
const copyStudents3 = newStudents.map(st => st.age === 30 ? {...st,  age: 32} : st)

console.log(copyStudents2)
console.log(copyStudents3)
console.log(copyStudents2)
console.log(newStudents)

//delete

const copyStudents4 = copyStudents2.filter(st => st.name !== 'Julia')

