import "./index.css";

export function nameText({ name: { title, first, last }}) {
	return `${title}. ${first} ${last}`;
}

export function Address({ data: { location: { street, city, state, country, postcode } } }) {
	return <div className="address-container">
		<span className="street-span">{ street.number }</span>, {}
		{ street.name }, { city }, { state }, {}
		<span className="country-span">{ country }</span>, {}
		{ postcode }
	</div>;
}

export function Timezone({ data: { location: { timezone: { offset, description } } } }) {
	return <div className="timezone-container">
		{ offset } — { description }
	</div>;
}