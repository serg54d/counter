import React from 'react';
import s from './CounterEl.module.css'

type CounterElPropsType = {
	value: number
	setValue: (value: number) => void
	maxValue: number
	minValue: number
}

export function CounterEl(props: CounterElPropsType) {
	let { value, setValue, maxValue, minValue } = props

	const isMaxNumber = value >= maxValue
	const isMinNumber = value === minValue
	const numberStyle = {
		color: isMaxNumber ? 'red' : ''
	}


	const onClickNumberIncHandler = () => {
		if (value < maxValue) {
			setValue(value + 1);
		}
	}
	const onClickNumberResetHandler = () => {
		setValue(minValue)
	}

	const setLocalStorage = () => {
		localStorage.setItem('counterValue', JSON.stringify(value))
	}
	const getLocalStorage = () => {
		let valueAsString = localStorage.getItem('counterValue',)
		if (valueAsString) {
			let newValue = JSON.parse(valueAsString)
			setValue(newValue)
		}

	}

	return (
		<div className={s.counter}>
			<div style={numberStyle} className={s.number}>{minValue > value ? minValue : value}</div>
			<div className={s.buttonsBlock}>
				<button disabled={isMaxNumber} onClick={onClickNumberIncHandler} className={s.button}>inc</button>
				<button disabled={isMinNumber} onClick={onClickNumberResetHandler} className={s.button}>reset</button>
			</div>
			<button onClick={setLocalStorage}>setLocalStorage</button>
			<button onClick={getLocalStorage}>getLocalStorage</button>
		</div >
	);
}


