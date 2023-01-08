import { useState } from 'react'
import './App.css'

import background from "./assets/background.jpg";
import Title from "./components/Title"
import Counter from './components/Counter'

import useCountdown from './Hooks/useCountdown';

function App() {

	const [day, hour, minute, second] = useCountdown("Jan, 9, 2023, 12:30:00")

	return (
		<div className="app" style={{ backgroundImage : `url(${background})` }}>
			<div className="container">
				<Title title="Countdown" />
				<div className="countdown-container">
					<Counter label={ day > 1 ? "Dias" : "Dia" } value={ day < 10 ? `0${day}` : day } />
					<span>:</span>
					<Counter label={ hour > 1 ? "Horas" : "Hora" } value={ hour < 10 ? `0${hour}` : hour } />
					<span>:</span>
					<Counter label={ minute > 1 ? "Minutos" : "Minutos" } value={ minute < 10 ? `0${minute}` : minute } />
					<span>:</span>
					<Counter label={ second > 1 ? "Segundos" : "segundo" } value={ second < 10 ? `0${second}` : second } />
				</div>
			</div>
		</div>
	)
}

export default App
