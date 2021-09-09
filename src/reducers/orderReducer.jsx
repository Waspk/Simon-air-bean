let initialState = {
    order: {}
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return {
                order: action.payload
            }
        default:
            return state;
    }
}

