import React from 'react';
import { Link } from 'react-router-dom';

export default function Location({ destination }) {
	return (
		<div className='column'>
			<div className='ui fluid card'>
				<div className='image'>
					<img src={destination.image} alt='you know what this is...' />
				</div>
				<div className='content'>
					<div className='header'>{destination.city}</div>
					<div className='meta'>
						<div>{destination.country}</div>
					</div>
					<Link to={`/city/${destination._id}`} className='ui right floated button'>
						Read More...
					</Link>
				</div>
			</div>
		</div>
	);
}
