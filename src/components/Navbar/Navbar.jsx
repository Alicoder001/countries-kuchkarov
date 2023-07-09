/** @format */

import styel from './Navbar.module.css';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useUrl from '../../hooks/useUrl';
import useFetch from '../../hooks/useFetch';
import useAbout from '../../hooks/useAbout';
import Loading from '../Loading/Loading';
const Navbar = () => {
	const { changeUrl, changeMode, mode } = useUrl();
	const { pending } = useFetch();
	const { pendingg } = useAbout();
	return (
		<div className='w-full dark:bg-blue-900' style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.0562443)' }}>
			<nav style={{ maxWidth: '1440px' }} className='  mx-auto py-6 px-20 flex justify-between items-center cursor-pointer relative'>
				<Link to={'/'}>
					<h1 className='font-extrabold dark:text-gray-200'>Where in the World?</h1>
				</Link>
				<div
					onClick={(e) => {
						e.preventDefault();
						if (mode === 'light') {
							changeMode('dark');
						} else if (mode === 'dark') {
							changeMode('light');
						}
					}}
					className='flex items-center gap-3'>
					{mode == 'light' && <FaRegMoon />}
					{mode == 'dark' && <FaRegSun className='text-gray-200' />}
					<p
						className='dark:text-gray-200
					'>
						{mode === 'light' && 'Dark'}
						{mode === 'dark' && 'Light'} Mode
					</p>
				</div>
				{(pending || pendingg) && <Loading />}
			</nav>
		</div>
	);
};

export default Navbar;
