import React, { ChangeEvent, useState } from 'react';

import './App.css';
import { CounterEl } from './components/CounterEl/CounterEl';
import { CounterElSettings } from './components/CounterElSettings/CounterElSettings';

function App() {
	const [value, setValue] = useState<number>(0)
	// debugger
	const [maxValue, setMaxValue] = useState<number>(10)
	const [minValue, setMinValue] = useState<number>(0)
	const [currentMaxValue, setCurrentMaxValue] = useState<number>(10)
	const [currentMinValue, setCurrentMinValue] = useState<number>(0)





	const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = Number(e.currentTarget.value);
		setCurrentMaxValue(inputValue < 0 ? 0 : inputValue);

	}

	const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = Number(e.currentTarget.value);
		setCurrentMinValue(inputValue < 0 ? 0 : inputValue);
	}

	const onSetValues = () => {
		if (currentMaxValue > currentMinValue) {
			setMaxValue(currentMaxValue);
			setMinValue(currentMinValue);
			setValue(currentMinValue)
		} 

	}

	return (
		<div className="App">
			<CounterElSettings
				onChangeMaxValue={onChangeMaxValue}
				maxValue={currentMaxValue}
				onChangeMinValue={onChangeMinValue}
				minValue={currentMinValue}
				onSetValues={onSetValues}
			/>
			<CounterEl
				value={value}
				setValue={setValue}
				maxValue={maxValue}
				minValue={minValue}
			/>
		</div>
	);
}

export default App;
