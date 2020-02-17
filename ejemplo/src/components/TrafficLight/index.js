//npx create-react-app ejemplo
//yarn install
//yarn start

import React , {useState} from 'react';
				//hook


import './styles.css'
import Light from '../Light'


const Colors = [
'red',
'yellow',
'green',];

const DummyTrafficLight = ({
	turnedOnLight, 
}) => (
	<div className = "traffic-light">
	{
	Colors.map(
		color => (
		<Light 
		key={color}
        color={color}
        isTurnedOn={color === turnedOnLight}
        />))
	}
	</div>
	);


const TrafficLight = () => {
	const [turnedOnIndex, setTurnedOnIndex] = useState(0);

	return(
	<>
		<DummyTrafficLight
			turnedOnLight={Colors[turnedOnIndex]}
		/>
		<button onClick = {
			() => {
				setTurnedOnIndex((turnedOnIndex+1) % Colors.length)
			}
		}>
		Next
		</button>
	</>
	)
};


export default TrafficLight;