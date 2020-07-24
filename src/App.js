import React from 'react';
import './assets/main.css';
import Navbar from './components/UI/Navbar';
import Search from './components/UI/Search';
import Pagination from './components/UI/Pagination';
import Pokemons from './components/pokemon/Pokemons';
import Footer from './components/UI/Footer';

function App() {
	return (
		<div className="container relative mx-auto overflow-hidden">
			<Navbar />
			<Search />
			<Pagination />
			<Pokemons />
			<Footer />
		</div>
	);
}

export default App;
