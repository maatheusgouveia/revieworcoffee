import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import './config/ReactotronConfig';
import history from './services/history';

import Routes from './routes';
import { store, persistor } from './store';

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router history={history}>
					<Routes />

					<ToastContainer autoClose={3000} />
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
