export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('falta todo')
    
        default:
            return initialState;
    }
}