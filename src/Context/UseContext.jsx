/** @format */

import { createContext, useReducer } from 'react';
const UseContext = createContext();
const handleState = (state, action, h) => {
	switch (action.type) {
		case 'changeUrl':
			return { ...state, url: action.payload };
		case 'isHome':
			return { ...state, home: action.payload };
		case 'region':
			return { ...state, region: action.payload };
		case 'search':
			return { ...state, search: action.payload };
		case 'type':
			return { ...state, type: action.payload };
		case 'mode':
			return { ...state, mode: action.payload };
		case 'limit':
			return { ...state, limit: action.payload };
		case 'skip':
			return { ...state, skip: action.payload };
		case 'len':
			return { ...state, len: action.payload };
		case 'page':
			return { ...state, page: action.payload };
		case 'changeId':
			return { ...state, id: action.payload };
		case 'setModal':
			return { ...state, modal: action.payload };
		default:
			state;
	}
};
const UrlProvider = ({ children }) => {
	const [state, dispatch] = useReducer(handleState, {
		url: 'https://kuchkarov-countries-api.onrender.com/all?_page=1',
		home: true,
		mode: 'light',
		region: 'all',
		page: 1,
		limit: 20,
		skip: 0,
		len: 255,
		id: null,
		modal: false,
		refresh: false,
		changePage(page) {
			dispatch({ type: 'page', payload: page });
		},
		changeLen(len) {
			dispatch({ type: 'len', payload: len });
		},

		changeLimit(limit) {
			dispatch({ type: 'limit', payload: limit });
		},
		changeSkip(skip) {
			dispatch({ type: 'skip', payload: skip });
		},
		changeRegion(region) {
			dispatch({ type: 'region', payload: region });
		},
		changeUrl(url, info) {
			dispatch({ type: 'changeUrl', payload: url });
	
		},
		changeId(id) {
			dispatch({ type: 'changeId', payload: id });
		},

		changeMode(mode) {
			dispatch({ type: 'mode', payload: mode });
		},
		setModal(modal) {
			dispatch({ type: 'setModal', payload: modal });
		},
	});

	return (
		<UseContext.Provider
			value={{
				...state,
			}}>
			{children}
		</UseContext.Provider>
	);
};

export { UseContext, UrlProvider };
