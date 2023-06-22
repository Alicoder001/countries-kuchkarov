import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useUrl from "../../hooks/useUrl";
const Filter = () => {
	const { data } = useFetch("https://restcountries.com/v3.1/all");
	const { changeUrl, changeRegion, changeType } = useUrl();
	return (
		<select
			className="outline-none rounded px-6 dark:bg-gray-700 dark:text-gray-200"
			onChange={(e) => {
				changeRegion(e.target.value);
				changeType("filter");
			}}
			style={{
				maxWidth: "200px",
				width: "100%",
				display: "block",
				height: "56px",
				boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
			}}>
			<option value="All">Filter by Region</option>
			<option value="Africa">Africa</option>
			<option value="Americas">Americas</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
};

export default Filter;
