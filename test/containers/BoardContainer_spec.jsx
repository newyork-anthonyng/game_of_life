import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithClass,
	findRenderedComponentWithType,
	Simulate
} from 'react-addons-test-utils';
import Board from '../../src/components/Board';
import BoardContainer from '../../src/containers/BoardContainer';
import { expect } from 'chai';
import sinon from 'sinon';

describe('BoardContainer', () => {
	it('should render a Board', () => {
		const component = renderIntoDocument(<BoardContainer gridSize={10} />);
		const board = findRenderedComponentWithType(component, Board);

		expect(board).to.be.ok;
	});

	it('should initially render with no alive squares', () => {
		const component = renderIntoDocument(<BoardContainer gridSize={10} />);
		const aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');

		expect(aliveSquares.length).to.equal(0);
	});

	it('should toggle squares between alive and not alive when clicked', () => {
		const component = renderIntoDocument(<BoardContainer gridSize={10} />);
		const squares = scryRenderedDOMComponentsWithClass(component, 'square');

		let aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');
		expect(aliveSquares.length).to.equal(0);

		Simulate.click(squares[0]);
		Simulate.click(squares[1]);
		aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');
		expect(aliveSquares.length).to.equal(2);

		Simulate.click(squares[0]);
		Simulate.click(squares[1]);
		aliveSquares = scryRenderedDOMComponentsWithClass(component, 'alive');
		expect(aliveSquares.length).to.equal(0);
	});

	it('should start a timer', () => {
		const clock = sinon.useFakeTimers();

		let logicInvoked = 0;
		const logic = (() => {
			const getNextGrid = () => {
				logicInvoked++;
				return [];
			};

			return { getNextGrid };
		})();
		const onEmptyBoard = () => {};

		const node = document.createElement('div');
		const speed = 500;
		const component = ReactDOM.render(
			<BoardContainer
				isPlaying={false}
				gridSize={10}
				logic={logic}
				speed={speed}
				onEmptyBoard={onEmptyBoard}
			/>, node);

		// start timer by changing isPlaying from false to true
		ReactDOM.render(<BoardContainer
			isPlaying={true}
			gridSize={10}
			logic={logic}
			speed={speed}
			onEmptyBoard={onEmptyBoard}
		/>, node);

		clock.tick(speed);
		expect(logicInvoked).to.equal(1);

		clock.restore();
	});

	it('should call onEmptyBoard when board is empty', () => {
		const clock = sinon.useFakeTimers();

		let onEmptyBoardInvoked = false;
		const callback = () => { onEmptyBoardInvoked = true };
		const logic = (() => {
			const getNextGrid = () => [];

			return { getNextGrid };
		})();

		const node = document.createElement('div');
		const speed = 500;
		const component = ReactDOM.render(
			<BoardContainer
				isPlaying={false}
				gridSize={10}
				logic={logic}
				speed={speed}
				onEmptyBoard={callback}
			/>, node);

		ReactDOM.render(
			<BoardContainer
				isPlaying={true}
				gridSize={10}
				logic={logic}
				speed={speed}
				onEmptyBoard={callback}
			/>, node);

		expect(onEmptyBoardInvoked).to.be.false;

		clock.tick(speed);
		expect(onEmptyBoardInvoked).to.be.true;

		clock.restore();
	});
});
