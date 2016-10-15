import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

class Page extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<App />
			</div>
		);
	}
}

ReactDOM.render(
	<Page />,
	document.getElementById('app')
);
