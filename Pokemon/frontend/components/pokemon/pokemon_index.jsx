import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestAllPokemon();
    }

    render() {
        //debugger
        return (
            <>
            <div id='pokemon-index'>
                <ul>
                {
                    this.props.allPokemon.map( (pokemon, idx)=>{
                        return (

                    <PokemonIndexItem 
                    key={idx} 
                    pokemonid= {pokemon.id}
                    poke_name={pokemon.name} 
                    img_url ={pokemon.image_url}/>
                        )})

                
                }                
                </ul>
                
            </div>
            <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
            </>
        )
    }


}


export default PokemonIndex;
