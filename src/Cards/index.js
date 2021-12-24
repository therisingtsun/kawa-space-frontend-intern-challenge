import React, { useContext } from "react";
import { SelectedCardContext } from "../State";
import { nameText, Address, Timezone } from "../Utils";
import "./index.css";

export function Card({ data, active }) {
	const context = useContext(SelectedCardContext);
	
	return <div className={ "card-container" + (active ? " --active" : "") } onClick={() => context.setCurrent(data)}>
		<div className="gender-nat-container">
			{ data.gender } • { data.nat }
		</div>
		<div className="name-text">
			{ nameText(data) }
		</div>
		<div className="email-text">
			{ data.email }
		</div>
	</div>;
}

export function CardsListing({ items }) {
	const { current } = useContext(SelectedCardContext);
	return <div className="cards-listing-container">
		{ items.map((item, i) => <Card key={ i } data={ item } active={ current.email === item.email ? "--active" : ""}/>) }
	</div>;
}

export function SelectedCard() {
	const { current } = useContext(SelectedCardContext);

	return <div className="selected-card-container">
		<img src={ current.picture.large } alt={ nameText(current) } />
		<div className="details-sub-container">
			<h1 className="name-text">
				{ nameText(current) }
			</h1>
			<Address data={ current } />
			<Timezone data={ current } />
			<div className="gender-text">
				{ current.gender }
			</div>
		</div>
	</div>;
}