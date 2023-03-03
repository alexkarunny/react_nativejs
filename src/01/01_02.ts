
type StudentType = {
    age: number
    name: string
    isActive: boolean
    address: addressType
    tech: techType[]
}

type addressType = {
    street: string
    city: string
    country: {
        title: string
        continent: string
    }
}

type techType = {
    id: number
    title: string
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuilding[]
    citizensNumber: number
}

type HouseType = {
    buildedAt: number
    repaired: false
    address: AddressType
}

type AddressType = {
    number: number
    street: streetType
}

type streetType = {
    title: string
}

type GovernmentBuilding = {
    type: string
    budget: number
    staffCount: number
    address: {
        street: streetType
    }
}

const student: StudentType = {
    age: 12,
    name: 'Alex',
    isActive: false,
    address: {
        street: 'Kazinca',
        city: 'Minsk',
        country: {
            title: 'Belarus',
            continent: 'Europe'
        }
    },
    tech: [
        {
            id: 1,
            title: 'Html',
        },
        {
            id: 2,
            title: 'CSS',
        },
        {
            id: 3,
            title: 'Html',
        }
    ]
}