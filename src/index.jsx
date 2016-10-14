import React from 'react';
import ReactDOM from 'react-dom';
import BoardContainer from './containers/BoardContainer';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<BoardContainer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
