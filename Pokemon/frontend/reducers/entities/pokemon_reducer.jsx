import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from "../../actions/pokemon_actions";
import { merge } from 'lodash';

const pokemon_reducer = (state = {}, action) => {
    const { pokemon } = action;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POKEMON:
            //in this case pokemon is singular
            const newObj = { [pokemon.id]: pokemon };
            return merge({}, state, newObj);
        case RECEIVE_ALL_POKEMON:
            return pokemon;
        default:
           return state;
    }
};

export default pokemon_reducer;


/*
{"id":1,"name":"Bulbasaur","attack":49,"defense":49,"moves":["tackle","vine whip"],"poke_type":"grass","image_url":"1.svg","item_ids":[3,2,1]}
*/