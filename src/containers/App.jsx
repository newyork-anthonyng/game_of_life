import React from 'react';
import BoardContainer from './BoardContainer';
import Logic from '../logic';

class App extends React.Component {
	constructor() {
		super();

		this.state = { isPlaying: false };
		this.handleClick = this.handleClick.bind(this);
		this.handleEmptyBoard = this.handleEmptyBoard.bind(this);
	}

	handleClick() {
		this.setState({ isPlaying: !this.state.isPlaying });
	}

	handleEmptyBoard() {
		this.setState({ isPlaying: false });
	}

	render() {
		const buttonText = this.state.isPlaying ? 'Pause' : 'Play';
		const gridSize = 30;
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
					onEmptyBoard={this.handleEmptyBoard}
					logic={Logic}
					speed={speed}
					/>
				<footer>
					<a href="https://github.com/newyork-anthonyng/game_of_life" title="GitHub">
						<img src="./assets/github.png" alt="GitHub" />
					</a>
					<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" title="Wikipedia">
						Learn more about Conway's Game of Life
					</a>
				</footer>
			</div>
		);
	}
}

export default App;
