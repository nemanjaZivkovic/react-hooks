import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue, callback) => {
	const [ result, setResult ] = useState(initialValue);

	useEffect(() => {
		fetch(url).then((response) => response.json()).then((json) => {
			console.log(`Fetched data from ${url}`, json);
            setResult(json);
            if (typeof callback === 'function') callback(json);
		});
	}, []);

	return result;
};
