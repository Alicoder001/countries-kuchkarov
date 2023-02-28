import React from "react";
import { Link } from "react-router-dom";

const CountryItem = ({ item }) => {
	if (item) {
		const { name, cca3, cioc, population, region, capital, flags } = item;

		return (
			<div
				className=" bg-white cursor-pointer hover:scale-105 duration-500 shadow-2xl shadow-black hover:shadow-xl hover:shadow-black dark:bg-gray-700 dark:text-gray-200"
				style={{
					borderRadius: "5px",
				}}>
				<Link to={`/country=name/${cioc ? cioc : cca3}`}>
					<div className="overflow-hidden  ">
						<img
							style={{
								borderTopLeftRadius: "5px",
								borderTopRightRadius: "5px",
							}}
							src={flags.png}
							className=" object-center w-full min-w-full  h-40"
							alt=""
						/>
					</div>

					<div className="p-6">
						<h1 className="font-[800] text-2xl mb-3">
							{" "}
							{name.common}
						</h1>
						<p className="font-bold">
							Population:
							<span className="font-normal"> {population}</span>
						</p>
						<p className="font-bold">
							Region:
							<span className="font-normal"> {region}</span>
						</p>
						<p className="font-bold">
							Capital:
							<span className="font-normal">
								{" "}
								{capital ? capital : "no capital"}
							</span>
						</p>
					</div>
				</Link>
			</div>
		);
	}
};
export default CountryItem;
