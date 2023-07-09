/** @format */

import React from 'react';
import { GoSearch } from 'react-icons/go';
import Filter from '../filter/Filter';
import useUrl from '../../hooks/useUrl';
const Formm = (e) => {
	const { changeUrl, region, page, url } = useUrl();
	return (
		<form className='flex justify-between items-center  '>
			<div
				className='flex py-4  px-8 gap-6 items-center rounded bg-white dark:bg-slate-700'
				style={{
					boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
					maxWidth: '480px',
					width: '100%',
				}}>
				<GoSearch className='dark:text-gray-200' />
				<input
					onChange={(e) => {
						e.preventDefault();
						let link;
						if (region !== 'all') {
							link = `https://kuchkarov-countries-api.onrender.com/region/${region}/name/${e.target.value}`;
						} else link = `https://kuchkarov-countries-api.onrender.com/${region}/name/${e.target.value}`;
						changeUrl(link,'form');
					
					}}
					type='text'
					className='w-full outline-none dark:bg-transparent dark:text-gray-200'
					placeholder='Search for a country…'
				/>
			</div>
			<Filter />
		</form>
	);
};

export default Formm;
