/** @format */

import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useUrl from '../../hooks/useUrl';

const Modal = () => {
	const [name, setName] = useState('');
	const [capital, setCapital] = useState('');
	const { pending, error, updateData } = useFetch();
	const { id, setModal, url, changeUrl } = useUrl();
	useEffect(() => {}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(id);
		updateData(
			{
				name,
				capital,
			},
			`https://kuchkarov-countries-api.onrender.com/update/${id}`,
		);
		changeUrl(url);
		setModal(false);
	};
	return (
		<div className='min-h-screen  z-10 w-full fixed top-0 left-0 bg-slate-900 bg-opacity-70 flex items-center justify-center'>
			<div className='block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
				<form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
							Name
						</label>
						<input
							onChange={(e) => {
								setName(e.target.value);
							}}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='username'
							type='text'
							placeholder='name'
							required
						/>
					</div>
					<div className='mb-6'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
							Capital
						</label>
						<input
							onChange={(e) => {
								setCapital(e.target.value);
							}}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							placeholder='capital'
							required
						/>
					</div>
					<div className='flex items-center justify-between'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'>
							{pending ? 'loading...' : 'Update'}
						</button>
					</div>
					{error && <p className='text-red-600 mt-6'>{error}</p>}
				</form>
			</div>
		</div>
	);
};

export default Modal;
