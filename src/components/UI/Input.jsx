import React from 'react';
import styles from './input.module.css';

const Input = (props) => {
	const { label } = props;
	return (
		<div className={styles.container}>
			<label htmlFor={label}>{label}</label>
			<br />
			<input className={styles.input} {...props} />
		</div>
	);
};

export default Input;
