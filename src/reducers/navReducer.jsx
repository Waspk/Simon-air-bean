export const navReducer = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case 'TOGGLE_ACTION':
                state.isOpen = !state.isOpen
                return state
        default:
            return state;
    }
}

