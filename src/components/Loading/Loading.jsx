import "./Loading.css";
const Loading = () => {
	return (
		<div className="fixed w-full h-full  z-10 flex items-center justify-center loadingIcon">
			<div className="lds-roller">
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
