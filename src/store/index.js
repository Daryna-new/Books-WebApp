import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const initialState = {};

export default () => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(
			applyMiddleware(sagaMiddleware)
		)
	);
	sagaMiddleware.run(rootSaga);
	return store;
};