import React from 'react';
import s from './CounterEl.module.css'
import { Button } from '../Button';

type CounterElPropsType = {
	value: number
	setValue: (value: number) => void
	maxValue: number
	minValue: number
	error: boolean
	isInitialized: boolean
	setMinValue: (value: number) => void
	setMaxValue: (value: number) => void
	setLocalStorage: () => void
	getLocalStorage: () => void
	onChangeShowSettings: () => void
}

export function CounterEl(props: CounterElPropsType) {
	let { value, setValue, maxValue, minValue, error, isInitialized, setMinValue, setMaxValue, setLocalStorage, getLocalStorage, onChangeShowSettings } = props

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



	// debugger


	return (
		<div className={s.counter}>
			<div style={numberStyle} className={s.number}>{!isInitialized ? "enter values and press 'set'" : error ? <span className={s.error}>incorrect</span> : value}</div>
			{error && <span className={s.error}>Введите корректные значения</span>}
			<div className={s.buttonsBlock}>
				{/* <button disabled={isMaxNumber || error} onClick={onClickNumberIncHandler} className={s.button}>inc</button> */}
				<Button isDisabled={isMaxNumber || error} onClick={onClickNumberIncHandler} title={'inc'} stylesName={s.button} />
				{/* <button disabled={isMinNumber || error} onClick={onClickNumberResetHandler} className={s.button}>reset</button> */}
				<Button isDisabled={isMinNumber || error} onClick={onClickNumberResetHandler} title={'reset'} stylesName={s.button} />
				<Button onClick={onChangeShowSettings} title={'set'} stylesName={s.button} />
			</div>
			<button onClick={setLocalStorage}>setLocalStorage</button>
			<button onClick={getLocalStorage}>getLocalStorage</button>
		</div >
	);
}


