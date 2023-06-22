import React, { useState } from "react";
import { useContext } from "react";
import { UseContext } from "../Context/UseContext";
const useUrl = () => {
	const context = useContext(UseContext);
	if (!context) {
		throw new Error("klfalksdfmasdfmlasdmf");
	}
	return context;
};
export default useUrl;
