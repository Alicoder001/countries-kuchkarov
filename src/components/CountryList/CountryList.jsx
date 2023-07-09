/** @format */

import React from 'react';
import CountryItem from '../CountryItem/CountryItem';
import useFetch from '../../hooks/useFetch';
import useUrl from '../../hooks/useUrl';
import { useEffect } from 'react';

const CountryList = () => {
	const { changeLimit, changeSkip, changeLen } = useUrl();
	const { data: dataa } = useFetch();
	let data = dataa && dataa.countries;
	useEffect(() => {
		if (dataa) {
			changeLimit(dataa.limit);
			changeSkip(dataa.skip);
			changeLen(dataa.total);
		}
	}, [dataa]);
	return (
		<div
			style={{
				gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
				gap: '75px',
			}}
			className='grid my-12 '>
			{data &&
				data.map((item) => {
					return <CountryItem key={item.id} item={item} />;
				})}
		</div>
	);
};

export default CountryList;
