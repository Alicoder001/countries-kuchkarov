/** @format */

import React, { useEffect, useState } from 'react';
import useUrl from './useUrl';
const useFetch = (info = '') => {
	const { url, page, modal } = useUrl();
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [pending, setPending] = useState(false);

	const getData = async (urll) => {
		setPending(true);
		try {
			const req = await fetch(urll);
			console.log('innerFetch:', urll);
			if (!req.ok) {
				throw new Error('Wrong!');
			}
			setPending(false);

			const data = await req.json();
			if (info !== 'about' || (info === 'about' && Array.isArray(data))) {
				setData(data);
			}
		} catch (err) {
			setData(null);
			setError(err.message);
			console.log(err);
		}
	};

	const updateData = async (data, url) => {
		setPending(true);
		try {
			const req = await fetch(url, {
				method: 'PATCH',
				body: JSON.stringify(data),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			console.log('innerFetch:', url);
			if (!req.ok) {
				throw new Error('Wrong! Not updated! ');
			}
			setPending(false);
		} catch (err) {
			setPending(false);
			setError(err.message);
			console.log(err);
		}
	};
	useEffect(() => {
		getData(url);
	}, [url, modal]);
	return { data, pending, error, url, updateData };
};

export default useFetch;
