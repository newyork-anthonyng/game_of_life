import React from 'react';
import ReactDOM from 'react-dom';
import BoardSquare from './components/BoardSquare';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { text: '0, 0' };
	}

	render() {
		const test = (x, y) => {
			this.setState({ text: `${x}, ${y}` });
		};

		return (
			<div>
				<h1>{this.state.text}</h1>
				<BoardSquare x={0} y={0} alive={true} handleClick={test} />
				<BoardSquare x={1} y={0} alive={false} handleClick={test} />
				<BoardSquare x={2} y={0} alive={true} handleClick={test} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
