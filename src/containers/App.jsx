import React from 'react';
import BoardContainer from './BoardContainer';
import Logic from '../logic';

class App extends React.Component {
	constructor() {
		super();

		this.state = { isPlaying: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ isPlaying: !this.state.isPlaying });
	}

	render() {
		const buttonText = this.state.isPlaying ? 'Pause' : 'Play';
		const gridSize = 20;
		const speed = 600;
		Logic.setGridSize(gridSize);

		return(
			<div>
				<button onClick={this.handleClick}>
					{buttonText}
				</button>
				<BoardContainer
					gridSize={gridSize}
					isPlaying={this.state.isPlaying}
					logic={Logic}
					speed={speed}
					/>
			</div>
		);
	}
}

export default App;
