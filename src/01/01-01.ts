

export const countSheep = (account: number) : string => {
    let str = ''
    if (account === 0) return str;
    for (let i = 1; i <= account; i++) {
        str = str + `${i} sheep...`
    }
    return str
}

export const value01_01 = '01-01';