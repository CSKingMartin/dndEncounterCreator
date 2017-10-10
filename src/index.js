import MonsterData from './monsters.json';


const requireAll = (context) => context.keys().map(context);
requireAll(require.context('./', true, /\.css$/));


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'

import { addMonster } from './actions';
import RosterApp from './reducers';

import App from '@Components/App/App.jsx';

let store = createStore(RosterApp);

const render = () => {
	console.log('State: ', store.getState())
	ReactDOM.render(
		<Provider store={store}>
			<AppContainer>
				<App />
			</AppContainer>
		</Provider>,
		document.getElementById('page')
	);
}
store.subscribe(() => {
	render();
});
render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@Components/App/App.jsx', () => {
    const NextApp = require('@Components/App/App.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
