import React, { useState } from "react";
import { useContext } from "react";
import { UseContext } from "../Context/UseContext";
const useUrl = () => {
	const context = useContext(UseContext);
	if (!context) {
		
	}
	return context;
};
export default useUrl;
