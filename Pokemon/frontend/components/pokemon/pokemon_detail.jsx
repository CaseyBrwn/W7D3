import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Link, Route } from 'react-router-dom';

class PokemonDetail extends React.Component{

    constructor (props) {
        super(props);
    
    }

    componentDidMount(){
        this.props.requestPokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.pokemonId !== prevProps.match.params.pokemonId){
            this.props.requestPokemon(this.props.match.params.pokemonId);
        }
    }

  

    render() {
        const items = Object.values(this.props.items).map( (item, idx)=>{
            const link = `/pokemon/${this.props.match.params.pokemonId}/items/${item.id}`;
            return <li key={item.id}><Link to={ link } >{item.name}</Link> </li>
        })



        return(
                <div id='pokemon-show'>
                    <div id='poke-info'>
                        <section id='show-info'>
                            <h3> {this.props.pokemon.name} </h3>
                            <img src={this.props.pokemon.image_url}/>
                            <h3>Current Items</h3>
                            <ul>
                                {items}
                            </ul>
                            <ul>
                                <Route path='/pokemon/:pokemonId/items/:itemId' component={ItemDetailContainer} />
                            </ul>
                        </section>
                    </div>
                </div>
            
        )

    }


}

export default PokemonDetail;
