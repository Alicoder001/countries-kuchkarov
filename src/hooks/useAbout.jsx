import React, { useEffect, useState } from "react";
import useUrl from "./useUrl";

const useAbout = () => {
	const url = "https://restcountries.com/v3.1/all";
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [pendingg, setPending] = useState(false);

	const getData = async (url) => {
		setPending(true);
		try {
			const req = await fetch(url);

			if (!req.ok) {
				throw new Error("Wrong!");
			}

			setPending(false);
			const data = await req.json();
			setData(data);
		} catch (err) {
			setError(err.message);
			console.log(err);
		}
	};

	useEffect(() => {
		getData(url);
	}, [url]);
	return { data, pendingg, error };
};

export default useAbout;
