/** @format */

import './Loading.css';
const Loading = () => {
	return (
		<div className='absolute left-[50%] translate-x-[-50%]  z-10 flex  justify-center loadingIcon'>
			<div className='lds-roller scale-50'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
