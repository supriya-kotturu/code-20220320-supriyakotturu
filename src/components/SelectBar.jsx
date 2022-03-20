import Input from './UI/Input';
import styles from './selectBar.module.css';

const SelectBar = () => {
	return (
		<div className={styles.container}>
			<Input label='CITY' placeholder='Select your City' />
			<Input label='DATES' placeholder='Select your dates' />
			<Input label='GUESTS' placeholder='Add Guests' />
		</div>
	);
};

export default SelectBar;
