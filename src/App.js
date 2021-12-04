import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const getData = async () => {
		setLoading(true);
		try {
			const req = await fetch(url);
			const data = await req.json();
			setData(data);
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	}

	const removeTour = (id) => {
		const newTours = data.filter(tour => id !== tour.id);
		setData(newTours);
	}

	useEffect(() => getData(), []);

	return (
		<>
			{loading
				? <Loading />
				: <Tours
					data={data}
					getData={getData}
					removeTour={removeTour}
				/>}
		</>
	);
}

export default App;
