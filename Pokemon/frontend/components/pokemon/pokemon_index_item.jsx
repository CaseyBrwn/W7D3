import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => {
  
    const path = `/pokemon/${props.pokemonid}`;

    return (
        <li>
            <Link to={path}> 
                {props.poke_name} 
                <img src={props.img_url} />
            </Link>
        </li>
    )
}