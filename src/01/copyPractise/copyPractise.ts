// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be
export const practise_06 = 'practise_06'
// 1. Simple object
export type manType = {
    name: string
    age: number
}
export let man: manType = {
    name: 'John',
    age: 28
};
export let manFullCopy = (u: manType): manType => {
    return {...u}
}  //  your code

// 2. Array of primitives
export type NumbersType = number[]
export let numbers: NumbersType = [1, 2, 3];
export let numbersFullCopy = (arr: NumbersType): NumbersType => {
    return [...arr]
} //  your code

// 3. Object inside an object
export type man1Type = {
    name: string
    age: number
    mother: {
        name: string
        age: number
    }
}
export let man1: man1Type = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};
export let man1FullCopy = (obj: man1Type): man1Type => {
    return {...obj, mother: {...obj.mother}}
} // your code

// 4. Array of primitives inside an object
export type man2Type = {
    name: string
    age: number
    friends: string[]
}
export let man2: man2Type = {
    name: 'John',
    age: 28,
    friends: ['Peter', 'Steven', 'William']
};
export let man2FullCopy = (obj: man2Type): man2Type => {
    return {...obj, friends: [...obj.friends]}
}  // your code

// 5 Array of objects
export type PeopleType = {
    name: string
    age: number
}[]
export let people: PeopleType = [
    {name: 'Peter', age: 30},
    {name: 'Steven', age: 32},
    {name: 'William', age: 28}
];
export let peopleFullCopy = (arr: PeopleType): PeopleType => {
    return arr.map(i => ({...i}))
}  // your code

// 6 Array of objects inside object
export type Man3Type = manType & {
    friends: manType[]
}
export let man3: Man3Type = {
    name: 'John',
    age: 28,
    friends: [
        {name: 'Peter', age: 30},
        {name: 'Steven', age: 32},
        {name: 'William', age: 28}
    ]
};
export let man3FullCopy = (m: Man3Type): Man3Type => {
    return {
        ...m,
        friends: m.friends
            .map(f => ({...m})
            )
    }
} //  your code

// 7 Object inside an object, inside an object
export type Man4Type = manType & {
    mother: manType & {
        work: {
            position: string
            experience: number
        }
    }
}
export let man4: Man4Type = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50,
        work: {
            position: 'doctor',
            experience: 15
        }
    }
};
export let man4FullCopy = (obj: Man4Type): Man4Type => {
    return {
        ...obj,
        mother: {
            ...obj.mother,
            work: {...obj.mother.work}
        }
    }
} //  your code

// 8 Array of objects inside object -> object
export type Man5Type = manType & {
    mother: manType & {
        work: {
            position: string
            experience: number
        }
        parents: manType[]
    }
}
export let man5: Man5Type = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50,
        work: {
            position: 'doctor',
            experience: 15
        },
        parents: [
            {name: 'Kevin', age: 80},
            {name: 'Jennifer', age: 78},
        ]
    }
};
export let man5FullCopy = (obj: Man5Type, workEx: number, patentName: string): Man5Type => {
    return {
        ...obj,
        mother: {
            ...obj.mother,
            work: {
                ...obj.mother.work,
                experience: workEx
            },
            parents: obj.mother.parents
                .map((p, i) => i === 0
                    ? {...p, name: patentName}
                    : p)
        }
    }
}//  your code

// 9 Object inside an object -> array -> object ->  object
export type Man6Type = manType & {
    mother: manType & {
        work: {
            position: string
            experience: number
        }
        parents: (manType & {
            favoriteDish: {
                title: string
            }
        })[]
    }
}
export let man6: Man6Type = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50,
        work: {
            position: 'doctor',
            experience: 15
        },
        parents: [
            {
                name: 'Kevin',
                age: 80,
                favoriteDish: {
                    title: 'borscht'
                }
            },
            {
                name: 'Jennifer',
                age: 78,
                favoriteDish: {
                    title: 'sushi'
                }
            },
        ]
    }
};
export let man6FullCopy = (obj: Man6Type, pos: string, name: string, dish: string): Man6Type => {
    return {
        ...obj,
        mother: {
            ...obj.mother,
            work: {
                ...obj.mother.work,
                position: pos
            },
            parents: obj.mother.parents
                .map(p => p.name === name
                    ? {...p, favoriteDish: {title: dish}}
                    : {...p, favoriteDish: {...p.favoriteDish}}
                )
        }
    }
}   //  your code

//10 Array of objects inside an object -> object -> array -> object ->  object
export type Man7Type = manType & {
    mother: manType & {
        work: {
            position: string
            experience: number
        }
        parents: (manType & {
            favoriteDish: {
                title: string
                ingredients: {
                    title: string
                    amount: number
                }[]
            }
        })[]
    }
}
export let man7: Man7Type = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50,
        work: {
            position: 'doctor',
            experience: 15
        },
        parents: [
            {
                name: 'Kevin',
                age: 80,
                favoriteDish: {
                    title: 'borscht',
                    ingredients: [
                        {title: 'beet', amount: 3},
                        {title: 'potatoes', amount: 5},
                        {title: 'carrot', amount: 1},
                    ]
                }
            },
            {
                name: 'Jennifer',
                age: 78,
                favoriteDish: {
                    title: 'sushi',
                    ingredients: [
                        {title: 'fish', amount: 1},
                        {title: 'rise', amount: 0.5}
                    ]
                }
            },
        ]
    }
};
export let man7FullCopy = (obj: Man7Type, titleDish: string, titleIngr: string, amount: number): Man7Type => {
    return {
        ...obj,
        mother: {
            ...obj.mother,
            parents: obj.mother.parents
                .map(p => p.favoriteDish.title === titleDish
                    ? {
                        ...p, favoriteDish: {
                            ...p.favoriteDish,
                            ingredients:
                                p.favoriteDish.ingredients.map(i => i.title === titleIngr ? {
                                    ...i,
                                    amount: amount
                                } : {...i})
                        }
                    }
                    : {
                        ...p, favoriteDish: {
                            ...p.favoriteDish,
                            ingredients: p.favoriteDish.ingredients.map(i => ({...i}))
                        }
                    })
        }
    }
}  //  your code

