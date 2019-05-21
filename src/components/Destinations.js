import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import Destination from './Destination';
import Loader from './Loader';
import destinationsAPI from '../apis/destinationsAPI';

function Destinations() {
	const [destinations, setDestinations] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSearch = async term => {
		setIsLoading(true);
		try {
			const response = await destinationsAPI.get('/api/destinations', {
				params: {
					continent: term,
				},
			});
			setDestinations(response.data);
			setIsLoading(false);
		} catch (error) {
			setError('We are sorry! Something went wrong!');
			setIsLoading(false);
		}
	};

	useEffect(() => {
		handleSearch();
	}, []);

	const renderImage = () => {
		if (isLoading) return <Loader />;
		if (error) return <div className='error'>{error}</div>;

		return (
			<>
				{destinations.map(destination => (
					<Destination key={destination._id} destination={destination} />
				))}
			</>
		);
	};

	return (
		<>
			<div className='ui container'>
				<SearchBar handleSearch={handleSearch} />
				<div className='ui three column grid'>{renderImage()}</div>
			</div>
		</>
	);
}

export default Destinations;
