const SET_ID = 'SET_ID';

const displayReducer = (state,action) => {
    switch(action.type) {
        case SET_ID:
            return {
                ID : action.payload
            }
        default:
            return state;
    }
}

export default displayReducer;