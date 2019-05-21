import React, { useState, useEffect } from 'react';
import destinationAPI from '../apis/destinationsAPI';

export default function City({ match }) {
	const [destination, setDestination] = useState({});

	const cityId = match.params.id;
	useEffect(() => {
		const getDestination = async () => {
			const response = await destinationAPI.get(`/api/destinations/${cityId}`);
			setDestination(response.data);
		};
		getDestination();
	}, [cityId]);

	return (
		<div className='ui container'>
			<div className='ui segments'>
				<div className='ui segment'>
					<img className='ui centered image' src={destination.image} alt='arten xosacel enq...' />
				</div>
				<div className='ui secondary segment'>
					<h2>
						{destination.city}, {destination.country}
					</h2>
					<p>{destination.description}</p>
				</div>
			</div>
		</div>
	);
}
