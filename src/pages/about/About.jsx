import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BsArrowLeft } from "react-icons/bs";
import useUrl from "../../hooks/useUrl";
const About = () => {
	const { name } = useParams();
	const { changeUrl, home, isHome } = useUrl();

	useEffect(() => {
		changeUrl(`https://restcountries.com/v3.1/alpha/${name}`);
	}, [name, home]);
	const { data, pending, error } = useFetch();

	if (data) {
		const {
			flags,
			name,
			population,
			region,
			subregion,
			capital,
			tld,
			currencies,
			borders,
		} = data[0];

		return (
			<div
				style={{ maxWidth: "1440px" }}
				className="mx-auto px-20 min-h-screen">
				<Link
					style={{ width: "136px" }}
					to={"/"}
					className="flex gap-3 mt-20 mb-20 items-center px-4 py-1 border-4 dark:bg-slate-700 dark:border-gray-200 rounded text-2xl dark:text-gray-200 ">
					<BsArrowLeft className="dark:text-gray-200 text-2xl" />
					<p>Back</p>
				</Link>
				<div className="flex gap-28 dark:text-gray-200">
					<img
						style={{ width: "560px", height: "401px" }}
						src={flags.png}
						alt=""
						width={560}
						height={401}
					/>
					<div className="w-full">
						<h1 className="text-4xl font-extrabold mb-6">
							{name.common}
						</h1>
						<div className="grid grid-rows-5 grid-flow-col gap-4 text-lg mb-12">
							<p className="font-medium">
								Native Name:{" "}
								<span className="font-light">
									{Object.values(name.nativeName)[0].common}
								</span>
							</p>
							<p className="font-medium">
								Population:{" "}
								<span className="font-light">{population}</span>
							</p>
							<p className="font-medium">
								Region:{" "}
								<span className="font-light">{region}</span>
							</p>
							<p className="font-medium">
								Sub Region:{" "}
								<span className="font-light">{subregion}</span>
							</p>
							<p className="font-medium">
								Capital:{" "}
								<span className="font-light">
									{capital ? capital : "no Capital"}
								</span>
							</p>
							<p className="font-medium">
								Top Level Domain:{" "}
								<span className="font-light">
									{tld ? tld[0] : "no Domain"}
								</span>
							</p>
							<p className="font-medium">
								Currencies:{" "}
								<span className="font-light">
									{currencies
										? Object.keys(currencies)
										: "no Currencies"}
								</span>
							</p>
						</div>
						<div className="flex items-center gap-5">
							<p className="font-medium ">Border Countries: </p>
							<div className="flex gap-3 flex-wrap">
								{borders ? (
									borders.map((border) => {
										return (
											<Link
												key={border}
												to={`/country=name/${border}`}
												className="px-5 py-1  shadow-md duration-300 hover:scale-105 shadow-black hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-700 rounded cursor-pointer">
												{border}
											</Link>
										);
									})
								) : (
									<span className="pl-2"> no Borders</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default About;
