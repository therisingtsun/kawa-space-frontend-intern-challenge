import React, { useEffect, useState } from "react";
import axios from "axios"
import ContextProvider from "./State";
import { CardsListing, SelectedCard } from "./Cards";

export default function App() {
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ items, setItems ] = useState([]);

	useEffect(() => {
		axios.get("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20")
			.then(res => res.data)
			.then(
				result => {
					setLoading(false);
					setItems(result.results);
				},
				error => {
					setLoading(false);
					setError(error);
				}
			)
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (loading) {
		return <div className="loading-message">Loading...</div>;
	} else {
		return items.length && <>
			<div className="top-bar">
				<h1 className="page-title">YourChallenge</h1>
				<nav>
					<a href="#product">Product</a>
					<a href="#download">Download</a>
					<a href="#pricing">Pricing</a>
				</nav>
			</div>
			<ContextProvider init={ items[0]} >
				<SelectedCard />
				<CardsListing items={ items } />
			</ContextProvider>
		</>;
	}
}