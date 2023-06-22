import React, { useEffect, useState } from "react";
import useUrl from "./useUrl";

const useFetch = () => {
	const { url } = useUrl();
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [pending, setPending] = useState(false);
	

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
	return { data, pending, error };
};

export default useFetch;
