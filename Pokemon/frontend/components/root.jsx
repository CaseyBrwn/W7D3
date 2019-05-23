import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container';




const Root = ({ store }) => (
    <HashRouter>
        <Provider store={store}>  
            <Route  path='/pokemon' component={PokemonIndexContainer} />
            
        </Provider>
    </HashRouter>
);

export default Root;