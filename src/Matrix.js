import React, { useState, useEffect } from 'react';

import MATRIX from './data/matrix';

const MIN_FPS = 5;
const MAX_FPS = 90;

function Matrix() {
	const [ index, setIndex ] = useState(0);
	const [ fps, setFps ] = useState(30);

	useEffect(
		() => {
			const interval = setInterval(() => {
				setIndex((curIndex) => setIndex((curIndex + 1) % MATRIX.length));
			}, 1000 / fps);
			return () => {
				clearInterval(interval);
			};
		},
		[ fps ]
	);

	const updateFps = (e) => {
		const val = e.target.value;
		setFps(Math.max(Number(val), MIN_FPS));
	};

	return (
		<div className="Matrix">
			<img src={MATRIX[index]} alt="matrix animation" />
			<div className="multiform">
				<h3>{fps}</h3>
				<div>
					Change FPS:
					<input type="range" value={fps} min={MIN_FPS} max={MAX_FPS} onChange={updateFps} />
				</div>
			</div>
		</div>
	);
}

export default Matrix;
