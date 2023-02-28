import { createContext, useReducer } from "react";
const UseContext = createContext();
const handleState = (state, action) => {
	switch (action.type) {
		case "changeUrl":
			return { ...state, url: action.payload };
		case "isHome":
			return { ...state, home: action.payload };
		case "region":
			return { ...state, region: action.payload };
		case "search":
			return { ...state, search: action.payload };
		case "type":
			return { ...state, type: action.payload };
		case "mode":
			return { ...state, mode: action.payload };
		default:
			state;
	}
};
const UrlProvider = ({ children }) => {
	const [state, dispatch] = useReducer(handleState, {
		url: "https://restcountries.com/v3.1/all",
		home: true,
		mode: "light",
		region: "All",
		search: "All",
		type: null,
	});
	const changeUrl = (url) => {
		dispatch({ type: "changeUrl", payload: url });
	};
	const isHome = (home) => {
		dispatch({ type: "isHome", payload: home });
	};
	const changeRegion = (region) => {
		dispatch({ type: "region", payload: region });
	};
	const changeSearch = (search) => {
		dispatch({ type: "search", payload: search });
	};
	const changeType = (type) => {
		dispatch({ type: "type", payload: type });
	};
	const changeMode = (mode) => {
		dispatch({ type: "mode", payload: mode });
	};
	return (
		<UseContext.Provider
			value={{
				...state,
				changeUrl,
				isHome,
				changeRegion,
				changeSearch,
				changeType,
				changeMode,
			}}>
			{children}
		</UseContext.Provider>
	);
};

export { UseContext, UrlProvider };
