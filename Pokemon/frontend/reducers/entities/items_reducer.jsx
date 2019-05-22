

const items_reducer  = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        default:
            return state;
    }
};

export default items_reducer;