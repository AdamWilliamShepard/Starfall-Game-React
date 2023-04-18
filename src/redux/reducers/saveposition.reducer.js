const savePositionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SAVE_POSITION':
            return action.payload;
        default:
            return state;
    }
};

export default savePositionReducer