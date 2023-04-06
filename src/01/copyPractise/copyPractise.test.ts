import {
    man,
    man1,
    man1FullCopy,
    man2,
    man2FullCopy,
    man2Type,
    man3,
    man3FullCopy,
    Man3Type,
    man4,
    man4FullCopy,
    man5,
    man5FullCopy,
    man6,
    man6FullCopy,
    man7,
    man7FullCopy,
    manFullCopy,
    numbers,
    numbersFullCopy,
    people,
    peopleFullCopy,
    PeopleType
} from './copyPractise';

test('1. Simple object', () => {
    let manCopy = manFullCopy(man)
    manCopy.age = 65
    expect(manCopy.age).toBe(65)
    expect(man.age).toBe(28)
    expect(man.name).toBe(manCopy.name)
    expect(man).not.toBe(manCopy)
})

test('2. Array of primitives', () => {
    const copyNumbers = numbersFullCopy(numbers)
    copyNumbers[0] = 6
    expect(copyNumbers).not.toBe(numbers)
    expect(copyNumbers[0]).toBe(6)
    expect(numbers[0]).toBe(1)
})

test('3. Object inside an object', () => {
    const ma1Copy = man1FullCopy(man1)
    ma1Copy.mother.name = 'Ludmila'
    expect(ma1Copy.mother.name).toBe('Ludmila')
    expect(man1.mother.name).toBe('Kate')
    expect(ma1Copy).not.toBe(man1)
    expect(ma1Copy.mother).not.toBe(man1)
})

test('4. Array of primitives inside an object', () => {
    const man2Copy: man2Type = man2FullCopy(man2)
    man2Copy.friends[0] = 'Alex'

    expect(man2Copy.friends[0]).toBe('Alex')
    expect(man2.friends[0]).toBe('Peter')
    expect(man2.friends).not.toBe(man2Copy.friends)
})

test('5. Array of objects', () => {
    const peopleCopy: PeopleType = peopleFullCopy(people)
    peopleCopy[1].age = 33
    peopleCopy[2].name = 'Bill'
    expect(peopleCopy[1].age).toBe(33)
    expect(people[1].age).toBe(32)
    expect(peopleCopy[2].name).toBe('Bill')
    expect(people[2].name).toBe('William')
})

test('6. Array of objects inside object', () => {
    const man3Copy: Man3Type = man3FullCopy(man3)
    man3Copy.friends[2].name = 'Kyle'
    man3Copy.friends[1].age = 35
    expect(man3Copy.friends[1].age).toBe(35)
    expect(man3.friends[1].age).toBe(32)
    expect(man3Copy.friends[2].name).toBe('Kyle')
    expect(man3.friends[2].name).toBe('William')
})

test('7. Object inside an object, inside an object', () => {
    const man4Copy = man4FullCopy(man4)
    man4Copy.mother.work.position = 'engineer'
    man4Copy.mother.age = 51
    expect(man4Copy.mother.work.position).toBe('engineer')
    expect(man4.mother.work.position).toBe('doctor')
    expect(man4Copy.mother.age).toBe(51)
    expect(man4.mother.age).toBe(50)
})

test('8. Array of objects inside object -> object', () => {
    const man5Copy = man5FullCopy(man5, 17, 'Monica')
    expect(man5Copy.mother.work.experience).toBe(17)
    expect(man5.mother.work.experience).toBe(15)
    expect(man5Copy.mother.parents[0].name).toBe('Monica')
    expect(man5.mother.parents[0].name).toBe('Kevin')
})

test('9. Object inside an object -> array -> object ->  object', () => {
    const man6Copy = man6FullCopy(man6, 'Teacher', 'Kevin', 'pizza')

    expect(man6Copy.mother.work.position).toBe('Teacher')
    expect(man6.mother.work.position).toBe('doctor')
    expect(man6Copy.mother.parents[0].favoriteDish.title).toBe('pizza')
    expect(man6.mother.parents[0].favoriteDish.title).toBe('borscht')
    expect(man6Copy.mother.parents[1].favoriteDish).not.toBe(man6.mother.parents[1].favoriteDish)
})

test('10. Array of objects inside an object -> object -> array -> object ->  object', () => {
    const man7Copy = man7FullCopy(man7, 'borscht', 'potatoes', 0)

    expect(man7Copy.mother.parents[0].favoriteDish.ingredients[1].amount).toBe(0)
    expect(man7.mother.parents[0].favoriteDish.ingredients[1].amount).toBe(5)
    expect(man7Copy.mother.parents[1].favoriteDish.ingredients).not.toBe(man7.mother.parents[1].favoriteDish.ingredients)
    expect(man7Copy.mother.parents).not.toBe(man7.mother.parents)
})