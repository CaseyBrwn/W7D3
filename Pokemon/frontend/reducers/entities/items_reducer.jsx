import { RECEIVE_POKEMON } from "../../actions/pokemon_actions";




const items_reducer  = (state = {}, action) => {
    Object.freeze(state);
    const {items} = action;
    switch(action.type){
        case RECEIVE_POKEMON:
            return items;
        default:
            return state;
    }
};

export default items_reducer;