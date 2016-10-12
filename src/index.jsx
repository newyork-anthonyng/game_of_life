import React from 'react';
import ReactDOM from 'react-dom';
import BoardSquare from './components/BoardSquare';

class App extends React.Component {
	render() {
		const test = (x, y) => console.log(x + ':' + y);

		return (
			<div>
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
