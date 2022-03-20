import Header from './components/Header';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
	const appTitle = 'Rethink your living & renting',
		appSubTitle = 'Make your stay painless with us';

	return (
		<div className='App'>
			<LandingPage title={appTitle} subTitle={appSubTitle}>
				<Header />
			</LandingPage>
		</div>
	);
}

export default App;
