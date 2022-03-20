import React from 'react';
import SelectBar from './SelectBar';
import styles from './landingPage.module.css';

const LandingPage = ({ title, subTitle, children }) => {
	return (
		<div className={styles.landingPageContainer}>
			{children}
			<center>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subTitle}>{subTitle}</p>
			</center>
			<SelectBar />
		</div>
	);
};

export default LandingPage;
