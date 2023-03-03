import exp from "constants";

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
    id: number
    buildedAt: number
    repaired: boolean
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

export const addMoneyToBugjet = (building: GovernmentBuilding, num: number) => {
    building.budget = building.budget + num
}

export const takeMoneyFromBudget = (governmentBuilding: GovernmentBuilding, number: number) => {
    governmentBuilding.budget = governmentBuilding.budget - number
}

export const destroyHouses = (city: CityType, street: string) => {

    for (let i = 0; i < city.houses.length; i++) {
        if(city.houses[i].address.street.title === street) {
            city.houses.splice(i, 1);
            i--
        }
    }

}

export const repairHouse = (house: HouseType) => {
    if(!house.repaired) house.repaired = true
}
export const toHireStaff = (building: GovernmentBuilding, num: number) => {
    building.staffCount += num
}