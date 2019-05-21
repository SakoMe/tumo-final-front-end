import React, { useState } from 'react';

export default function SearchBar({ handleSearch }) {
	const [value, setValue] = useState('');

	const handleChange = event => setValue(event.target.value);

	const handleSubmit = event => {
		event.preventDefault();
		handleSearch(value);
		setValue('');
	};

	return (
		<form className='Form' onSubmit={handleSubmit}>
			<div className='ui fluid action input'>
				<input
					type='text'
					placeholder='Filter by continent i.e Asia, Europe, Africa...'
					value={value}
					onChange={handleChange}
				/>
				<button className='ui button' type='submit'>
					Search
				</button>
			</div>
		</form>
	);
}
