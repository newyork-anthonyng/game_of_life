import React from 'react';
import BoardContainer from './BoardContainer';

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
		return(
			<div>
				<button onClick={this.handleClick}>
					{buttonText}
				</button>
				<BoardContainer isPlaying={this.state.isPlaying} />
			</div>
		);
	}
}

export default App;
