import PokemonIndex from "./pokemon_index";
import {connect} from "react-redux";
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const msp = (state, props) => {
    return {
        allPokemon: selectAllPokemon(state)
    };
};

const mdp = (dispatch) => {
    return {
        requestAllPokemon: () => dispatch(requestAllPokemon())
    };
};

export default connect(msp, mdp)(PokemonIndex);
