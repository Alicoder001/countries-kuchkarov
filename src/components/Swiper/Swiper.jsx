/** @format */
import url from 'url';
import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import useUrl from '../../hooks/useUrl';

const Swiper = () => {
	const { page, changePage, url, changeUrl, len, limit, skip } = useUrl();
	console.log(skip + limit * page, len);
	return (
		<div className='fixed left-[50%] flex translate-x-[-50%]  gap-4 justify-between bottom-10 items-center'>
			{page > 1 ? (
				<FaRegArrowAltCircleLeft
					onClick={() => {
						const index = url.includes('?') ? url.indexOf('?') : url.length;
						changeUrl(url.slice(0, index) + `?_page=${page - 1}`,'swiper');
						changePage(page - 1);
					}}
					className={' hover:cursor-pointer duration-500 hover:scale-[1.1]'}
					size={45}
				/>
			) : (
				<FaRegArrowAltCircleLeft className={'opacity-5 hover:cursor-pointer duration-500 hover:scale-[1.1]'} size={45} />
			)}
			<p className='text-2xl font-bold'>{page}</p>
			{skip + limit * page <= len ? (
				<FaRegArrowAltCircleRight
					onClick={() => {
						const index = url?.includes('?') ? url?.indexOf('?') : url?.length;
						changeUrl(url.slice(0, index) + `?_page=${page + 1}`,'swiper');
						changePage(page + 1);
					}}
					className={` hover:cursor-pointer duration-500 hover:scale-[1.1]`}
					size={45}
				/>
			) : (
				<FaRegArrowAltCircleRight className={` opacity-5 hover:cursor-pointer duration-500 hover:scale-[1.1]`} size={45} />
			)}
		</div>
	);
};

export default Swiper;
