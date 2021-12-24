import React, { createContext, useState } from "react";

export const SelectedCardContext = createContext({
	current: null,
	setContext: () => {}
});

export default function ContextProvider({ children, init }) {
	const [ current, setCurrent ] = useState(init);
	const context = {
		current,
		setCurrent
	};

	return <SelectedCardContext.Provider value={ context }>
		{ children }
	</SelectedCardContext.Provider>;
}