import React from 'react';

const PokemonDetail = () => {
	return (
		<div>
			<div className="p-2 flex content-around items-center mt-3">
				<img
					className="pokemon-detail-left"
					// src={id > 807 ? sprites.front_default : imgUrl}
					alt="pokemon-sprites"
				/>
				<div className="pokemon-detail-right">
					<div className="pokemon-detail-right-top">
						<p>
							#id <br />
							name
						</p>
					</div>
					<table>
						<tbody>
							<tr>
								<td>Types</td>
								types
							</tr>
							<tr>
								<td>Height</td>
								<td>height</td>
							</tr>
							<tr>
								<td>Weight</td>
								<td>weight</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="pokemon-detail-sprites">other sprites</div>
			<button className="back-btn">Back</button>
		</div>
	);
};

export default PokemonDetail;
