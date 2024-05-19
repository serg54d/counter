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
	const [error, setError] = useState<boolean>(false)
	const [isInitialized, setIsInitialized] = useState<boolean>(false);
	const [showSettings, setShowSettings] = useState<boolean>(false);

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
			setError(false)
			setIsInitialized(true)
		} else {
			setError(true)
		}

	}


	const setLocalStorage = () => {
		localStorage.setItem('counterValue', JSON.stringify(value))
		localStorage.setItem('minValue', JSON.stringify(minValue))
		localStorage.setItem('maxValue', JSON.stringify(maxValue))
	}
	const getLocalStorage = () => {
		let valueAsString = localStorage.getItem('counterValue',)
		let minValueAsString = localStorage.getItem('minValue',)
		let maxValueAsString = localStorage.getItem('maxValue',)
		if (valueAsString) {
			let newValue = JSON.parse(valueAsString)
			setValue(newValue)

		}
		if (minValueAsString) {
			let newMinValue = JSON.parse(minValueAsString)
			setCurrentMinValue(newMinValue)
			setMinValue(newMinValue)

		}
		if (maxValueAsString) {
			let newMaxValue = JSON.parse(maxValueAsString)
			setCurrentMaxValue(newMaxValue)
			setMaxValue(newMaxValue)

		}

	}

	const onChangeShowSettings = () => {
		setShowSettings(!showSettings)
	}


	return (

		<div className="App">

			{showSettings && <CounterElSettings
				onChangeMaxValue={onChangeMaxValue}
				maxValue={currentMaxValue}
				onChangeMinValue={onChangeMinValue}
				minValue={currentMinValue}
				onSetValues={onSetValues}
				error={error}
				showSettings={showSettings}
				onChangeShowSettings={onChangeShowSettings}
			/>}


			{!showSettings && <CounterEl
				value={value}
				setValue={setValue}
				maxValue={maxValue}
				minValue={minValue}
				error={error}
				isInitialized={isInitialized}
				setMinValue={setMinValue}
				setMaxValue={setMaxValue}
				getLocalStorage={getLocalStorage}
				setLocalStorage={setLocalStorage}
				onChangeShowSettings={onChangeShowSettings}
			/>}
		</div>
	);
}

export default App;
