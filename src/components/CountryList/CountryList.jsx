import React, { useEffect, useState } from "react";
import CountryItem from "../CountryItem/CountryItem";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import useUrl from "../../hooks/useUrl";

const CountryList = () => {
	const { changeUrl, home, region, search, type } = useUrl();
	const regionn = region;
	useEffect(() => {
		changeUrl("https://restcountries.com/v3.1/all");
	}, [home]);
	const { data } = useFetch();
	return (
		<div
			style={{
				gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
				gap: "75px",
			}}
			className="grid my-12 ">
			{data &&
				data.map((item) => {
					return (
						<CountryItem
							key={item.name.common}
							item={
								type == "filter"
									? regionn != "All"
										? item.region == regionn
											? item
											: null
										: item
									: type == "search"
									? item.name.common
											.toLowerCase()
											.includes(search.toLowerCase())
										? item
										: null
									: item
							}
						/>
					);
				})}
		</div>
	);
};

export default CountryList;
