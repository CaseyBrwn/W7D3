import { combineReducers } from 'redux';
import pokemon from './pokemon_reducer';
import items from './items_reducer';

export default combineReducers({
    pokemon, //Collection of all pokemons
    items // collection items for 1 single pokemon we selected
});