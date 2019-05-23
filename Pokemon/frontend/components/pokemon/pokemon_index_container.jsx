import PokemonIndex from "./pokemon_index";
import {connect} from "react-redux";
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { withRouter} from "react-router-dom";


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

export default withRouter(connect(msp, mdp)(PokemonIndex));
