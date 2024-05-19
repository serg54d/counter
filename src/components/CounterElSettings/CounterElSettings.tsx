import React, { ChangeEvent, useState } from 'react';
import s from './CounterElSettings.module.css'
import { Button } from '../Button';

type CounterElSettingsType = {
	onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
	maxValue: number
	onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
	minValue: number
	onSetValues: () => void
	error: boolean
	showSettings: boolean
	onChangeShowSettings: () => void
}

export function CounterElSettings(props: CounterElSettingsType) {
	let { onChangeMaxValue, maxValue, onChangeMinValue, minValue, onSetValues, error, onChangeShowSettings } = props
	const errorMinValueStyle = {
		// color: isMaxNumber ? 'red' : ''
		// color: errorMin ? '' : 'red',
		background: !error ? '' : '#f12626',
	}

	const onClickButtonHandler = () => {
		onSetValues()
		onChangeShowSettings()
	}

	return (
		<div className={s.counterSettings}>
			<div className={s.inputsBlock}>
				<div className={s.settingItem}>
					<p>max value</p>
					<div className={s.inputBlock}>
						<input onChange={onChangeMaxValue} value={maxValue} type='number' />
					</div>
				</div>

				<div className={s.settingItem}>
					<p>min value</p>
					<div className={s.inputBlock}>
						<input style={errorMinValueStyle} onChange={onChangeMinValue} value={minValue} type='number' />

					</div>
					{error && <span className={s.errorMin}>Введите корректные значения</span>}
				</div>

			</div>
			<div className={s.buttonsBlock}>
				{/* <button className={s.button} onClick={onSetValues}>set</button> */}
				<Button onClick={onClickButtonHandler } title={'set'} stylesName={s.button} />
			</div>

		</div >
	);
}


