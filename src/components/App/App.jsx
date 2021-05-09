import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import indexRoutes from '../../contants/indexRoutes'
import './App.css'

const App =() => (
	<div className="app">
		<Router>
			<Switch>
				{indexRoutes.map((el, key) => (
					<Route key={key} path={el.path} component={el.component} exact />
				))}
			</Switch>
		</Router>
	</div>
);

export default App;
