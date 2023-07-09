/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import useUrl from '../../hooks/useUrl';
const CountryItem = ({ item }) => {
	const { changeId, setModal } = useUrl();
	if (item) {
		const { name, alfa, population, region, capital, flags, id } = item;

		return (
			<div
				className=' bg-white cursor-pointer  duration-500 shadow-2xl shadow-black hover:shadow-xl hover:shadow-black dark:bg-gray-700 dark:text-gray-200 relative'
				style={{
					borderRadius: '5px',
				}}>
				<CiEdit
					onClick={() => {
						changeId(id);
						setModal(true);
					}}
					size={30}
					className='absolute opacity-40 right-6 bottom-6 hover:scale-125 hover:opacity-100 duration-500 hover:text-blue-700'
				/>
				<Link to={`/country=name/${alfa}`}>
					<div className='overflow-hidden '>
						<img
							style={{
								borderTopLeftRadius: '5px',
								borderTopRightRadius: '5px',
							}}
							src={flags}
							className=' object-center w-full min-w-full  h-40'
							alt=''
						/>
					</div>

					<div className='p-6'>
						<h1 className='font-[800] text-2xl mb-3'> {name}</h1>
						<p className='font-bold'>
							Population:
							<span className='font-normal'> {population}</span>
						</p>
						<p className='font-bold'>
							Region:
							<span className='font-normal'> {region}</span>
						</p>
						<p className='font-bold'>
							Capital:
							<span className='font-normal'> {capital ? capital : 'no capital'}</span>
						</p>
					</div>
				</Link>
			</div>
		);
	}
};
export default CountryItem;
