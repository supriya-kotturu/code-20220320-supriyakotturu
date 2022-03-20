import React from 'react';
import styles from './header.module.css';
const Header = () => {
	return (
		<header>
			<div className={styles.headerContainer}>
				<span className={styles.logo}>Your Logo</span>
				<div className={styles.menuContainer}>
					<span className={styles.menuItem}>Explore</span>
					<span className={styles.menuItem}>About</span>
					<span className={styles.menuItem}>
						City
						{/* <select name='City' id='city'>
							<option value=''>City</option>
							<option value='Hyderabd'>Hyderabad</option>
							<option value='Bangalore'>Bangalore</option>
							<option value='Pune'>Pune</option>
							<option value='Noida'>Noida</option>
						</select> */}
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
