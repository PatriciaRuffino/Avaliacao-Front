/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useEffect, useState } from 'react';
import fotogit from './img/fotogit.png';

const Portifolio = () => {

	const [repositories, setRepositories] = useState([])
	useEffect(() => {
		fetch("https://api.github.com/users/PatriciaRuffino/repos")
			.then(response => response.json())
			.then(data => setRepositories(data))
		
		
	}, [])
	return (
		<>
			{repositories.map(repository => {
				return (
					<div className="card text-center">

						<div className="overflow">
							<img className="fotogit" src={fotogit} alt="git foto" />
						</div>
						< div className="card-body text-dark">
							<h4 className="card-title">{repository.name}</h4>
							<p className="card-text text-secondary">{repository.description}</p>
							<a href={repository.html_url} className="btn btn-outline-success" target="_blank">Saiba mais</a>
						</div>
					</div>

				)
			})}

		</>

)
}

export default Portifolio










