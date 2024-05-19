import React from 'react';


type ButtonPropsType = {
	isDisabled?: boolean
	onClick: () => void
	title: string
	stylesName: string
}

export function Button(props: ButtonPropsType) {

	let { isDisabled, onClick, title, stylesName } = props

	const onClickHandler = () => {
		onClick()
	}

	return (
		<button disabled={isDisabled} onClick={onClickHandler} className={stylesName}>{title}</button>
	);
}


