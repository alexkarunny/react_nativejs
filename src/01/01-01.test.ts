import {countSheep} from "./01-01";

test('count sheep', () => {
    const zerosheep = countSheep(0);
    const firstsheep = countSheep(1);
    const secondsheep = countSheep(2);


    expect(zerosheep).toBe('')
    expect(firstsheep).toBe('1 sheep...')
    expect(secondsheep).toBe('1 sheep...2 sheep...')

})