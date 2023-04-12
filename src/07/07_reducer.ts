export const sum = (salary: number, n: number) => {
    return salary + n
}
export const sub = (salary: number, n: number) => {
    return salary - n
}
export const div = (salary: number, n: number) => salary / n

export const mul = (salary: number, n: number) => salary * n


export type ActionType = {
    type: 'SUM' | 'DIV' | 'MUL' | 'SUB'
    n: number
}

export type StateType = number

export const salaryReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SUM':
            return state + action.n
        case 'DIV':
            return state / action.n
        case 'MUL':
            return state * action.n
        case 'SUB':
            return state - action.n
        default:
            return state
    }
}
