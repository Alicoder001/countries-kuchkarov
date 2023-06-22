import React from "react";
import useUrl from "../../hooks/useUrl";
import CountryList from "../CountryList/CountryList";
import Formm from "../Formm/Formm";

const Main = () => {
	return (
		<div
			style={{ maxWidth: "1440px" }}
			className=" mx-auto px-20 py-12 min-h-screen">
			<Formm />
			<CountryList />
		</div>
	);
};

export default Main;
