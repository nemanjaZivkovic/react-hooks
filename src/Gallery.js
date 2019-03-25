import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;
const minimumIncrement = 1;


function Gallery() {
	const [ index, setIndex ] = useState(0);
	const [ delay, setDelay ] = useState(3 * SECONDS);
	const [ increment, setIncrement ] = useState(1);

	useEffect(
		() => {
			const interval = setInterval(() => {
				setIndex((currIndex) => (currIndex + increment) % PICTURES.length);
			}, delay);

			//cleanup interval
			return () => {
				clearInterval(interval);
			};
		},
		[ delay, increment ]
	);

	const updateDelay = (e) => {
		const delay = Number(e.target.value) * SECONDS;
		setDelay(Math.max(delay, minimumDelay));
	};

	const updateIncrement = (event) => {
		const increment = Number(event.target.value);

		setIncrement(Math.max(increment, minimumIncrement));
	};

	return (
		<div className="Gallery">
			<img src={PICTURES[index].image} alt="gallery" />
			<div className="multiform">
				<div>
					Gallery transition delay (seconds):
					<input type="number" onChange={updateDelay} />
					Gallery increment:
					<input type="number" onChange={updateIncrement} />
				</div>
			</div>
		</div>
	);
}

export default Gallery;
