import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

function persist(reducers) {
	const persistedReducer = persistReducer(
		{
			key: '@revieworcoffee',
			storage,
			whitelist: ['auth', 'user'],
		},
		reducers
	);
	return persistedReducer;
}

export default persist;
