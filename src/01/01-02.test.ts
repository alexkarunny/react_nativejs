import {
    addMoneyToBugjet,
    CityType, createHelloMessages,
    destroyHouses,
    destroyStreets, getBuildings, getHousesOnTheStreet, getStreetTitleofHouses, GovernmentBuilding, HouseType,
    repairHouse,
    takeMoneyFromBudget,
    toHireStaff
} from "./01_02";
import exp from "constants";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street',
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'Hospital',
                budget: 20000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central str'
                    }
                }
            },
            {
                type: 'Fire-station',
                budget: 50000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South str'
                    }
                }
            }
        ],
        citizensNumber: 100000,
    }
})

test('three houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Happy street');

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('Happy street');


})

test('government', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('Hospital');
    expect(city.governmentBuildings[0].budget).toBe(20000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central str');

    expect(city.governmentBuildings[1].type).toBe('Fire-station');
    expect(city.governmentBuildings[1].budget).toBe(50000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe('South str');
})

test('increase budget', () => {
    addMoneyToBugjet(city.governmentBuildings[0], 10000);

    expect(city.governmentBuildings[0].budget).toBe(30000)
})

test('decrease budget', () => {
    takeMoneyFromBudget(city.governmentBuildings[1], 10000)

    expect(city.governmentBuildings[1].budget).toBe(40000)
})

test('Houses should be destroyed', () => {
    destroyHouses(city, "Happy street")

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(2)
})

test('house should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()

})

test('staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test('street should be destroyed', () => {
    destroyStreets(city, 'Happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(2)
})

test('list of streets titles of houses', () => {
    let happyHouses: HouseType[] = getHousesOnTheStreet(city.houses, "Happy street")
    let whiteHouses = getHousesOnTheStreet(city.houses, "White street")

    expect(happyHouses.length).toBe(2)
    expect(whiteHouses.length).toBe(1)
})

test('biulding with correct staff count', () => {
    let buildings: GovernmentBuilding[] = getBuildings(city.governmentBuildings, 1000)
    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('Fire-station')
})

test('list of streets of government buildings', () => {
    const streetsName = getStreetTitleofHouses(city.governmentBuildings)

    expect(streetsName.length).toBe(2)
    expect(streetsName[0]).toBe('Central str')
    expect(streetsName[1]).toBe('South str')
})

test('create hello messages', () => {
    const messages:string[] = createHelloMessages(city.houses)

    expect(messages.length).toBe(city.houses.length)
    expect(messages[1]).toBe('Hello from White street,100')
    expect(messages[2]).toBe('Hello from Happy street,101')

})

