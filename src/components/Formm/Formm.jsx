import React from "react";
import { GoSearch } from "react-icons/go";
import Filter from "../filter/Filter";
import useUrl from "../../hooks/useUrl";
const Formm = (e) => {
	const { changeSearch, changeType } = useUrl();

	return (
		<form className="flex justify-between items-center ">
			<div
				className="flex py-4  px-8 gap-6 items-center rounded bg-white"
				style={{
					boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
					maxWidth: "480px",
					width: "100%",
				}}>
				<GoSearch />
				<input
					onChange={(e) => {
						e.preventDefault();
						changeSearch(e.target.value);
						changeType("search");
					}}
					type="text"
					className="w-full outline-none"
					placeholder="Search for a country…"
				/>
			</div>
			<Filter />
		</form>
	);
};

export default Formm;
