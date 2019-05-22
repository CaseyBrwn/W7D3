import React from 'react';

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
            <div>
                <ul>
                {
                    this.props.allPokemon.map( (pokemon, idx)=>{
                        return (
                        <li key={idx}> { pokemon.name } 
                               <img src={pokemon.image_url}/>
                        </li> )
                    })
                }                
                </ul>
            </div>
        )
    }


}


export default PokemonIndex;
