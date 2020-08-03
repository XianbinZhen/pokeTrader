import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/main.css';
import Navbar from './components/UI/Navbar';
import Search from './components/UI/Search';
import Pagination from './components/UI/Pagination';
import Pokemons from './components/pokemon/Pokemons';
import Footer from './components/UI/Footer';
import PokemonDetail from './components/pokemon/PokemonDetail';

function App() {
	return (
		<div className="container relative mx-auto overflow-hidden">
			<Navbar />
			<Search />
			<Pagination />
			<Switch>
				<Route exact path="/" component={Pokemons} />
				<Route exact path="/pokemon/:id" component={PokemonDetail} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
