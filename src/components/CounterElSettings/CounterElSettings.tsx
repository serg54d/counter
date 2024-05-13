import React, { ChangeEvent } from 'react';
import s from './CounterElSettings.module.css'

type CounterElSettingsType = {
	onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
	maxValue: number
	onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
	minValue: number
	onSetValues: () => void
}

export function CounterElSettings(props: CounterElSettingsType) {
	let { onChangeMaxValue, maxValue, onChangeMinValue, minValue, onSetValues } = props
	let errorMin = minValue < maxValue
	const errorMinValueStyle = {
		// color: isMaxNumber ? 'red' : ''
		color: errorMin ? '' : 'red',
		outline: errorMin ? '' : '2px solid red'
	}
	return (
		<div className={s.counterSettings}>
			<div className={s.inputsBlock}>
				<div className={s.settingItem}>
					<p>max value</p>
					<div className={s.inputBlock}>
						<input onChange={onChangeMaxValue} value={maxValue} />
					</div>
				</div>

				<div className={s.settingItem}>
					<p>min value</p>
					<div className={s.inputBlock}>
						<input style={errorMinValueStyle} onChange={onChangeMinValue} value={minValue} />
						{!errorMin && <p>Минимальное значение не может быть больше максимального</p>}
					</div>
				</div>

			</div>
			<div className={s.buttonsBlock}>
				<button className={s.button} onClick={onSetValues}>set</button>
			</div>

		</div >
	);
}


