/** @format */

import React from 'react';

import useUrl from '../../hooks/useUrl';
const Filter = () => {
	const { changeUrl, changeRegion, region, changePage } = useUrl();

	return (
		<select
			className='outline-none rounded px-6 dark:bg-gray-700 dark:text-gray-200'
			onChange={(e) => {
				if (e.target.value !== 'all') {
					changeUrl(`https://kuchkarov-countries-api.onrender.com/region/${e.target.value}`,'filter');
					changePage(1);
				} else {
					changeUrl(`https://kuchkarov-countries-api.onrender.com/${e.target.value}`,"filter");
					changePage(1);
				}
				changeRegion(e.target.value);
			}}
			style={{
				maxWidth: '200px',
				width: '100%',
				display: 'block',
				height: '56px',
				boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
			}}>
			<option value='all'>{region ? 'Filter by Region' : region}</option>
			<option value='africa'>Africa</option>
			<option value='americas'>Americas</option>
			<option value='asia'>Asia</option>
			<option value='europe'>Europe</option>
			<option value='oceania'>Oceania</option>
		</select>
	);
};

export default Filter;
