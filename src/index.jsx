import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square';

class App extends React.Component {
	render() {
		return (
			<div>
				<Square alive={true} />
				<Square alive={false} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
