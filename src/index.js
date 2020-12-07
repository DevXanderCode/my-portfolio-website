import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const { store, persistor } = configureStore();
const notistackRef = React.createRef();

const onClickDismiss = (key) => () => {
	notistackRef.current.closeSnackbar(key);
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SnackbarProvider
					maxSnack={3}
					ref={notistackRef}
					action={(key) => (
						<IconButton onClick={onClickDismiss(key)}>
							<CloseIcon />
						</IconButton>
					)}
				>
					<App />
				</SnackbarProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
