
import { connect } from "react-redux";
import { requestPokemon } from '../../actions/pokemon_actions';
import { withRouter } from "react-router-dom";
import PokemonDetail from './pokemon_detail';


const msp = (state, ownprops) => {
    const pokemonId = ownprops.match.params.pokemonId; 
    const pokemon = state.entities.pokemon[pokemonId] || {};
    
    return {
        items: state.entities.items,
        pokemon
    };

};

const mdp = (dispatch) => {
    
    return {requestPokemon: (id) => dispatch(requestPokemon(id))};

};

export default withRouter(connect(msp, mdp)(PokemonDetail));