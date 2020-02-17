import React from 'react';

import './styles.css';

const Light = ({
	color,
	size,
	isTurnedOn = false,
}) => (
	<div className='light'
	style = {{backgroundColor: color,
		opacity: isTurnedOn ? 1.0 : 0.25}}>
	</div>
);

export default Light;