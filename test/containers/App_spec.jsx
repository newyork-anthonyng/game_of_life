import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithTag,
	findRenderedComponentWithType,
	Simulate
} from 'react-addons-test-utils';
import BoardContainer from '../../src/containers/BoardContainer';
import App from '../../src/containers/App';
import { expect } from 'chai';

describe('App', () => {
	it('should render a BoardContainer and a button', () => {
		const component = renderIntoDocument(<App />);
		const board = findRenderedComponentWithType(component, BoardContainer);
		const button = findRenderedDOMComponentWithTag(component, 'button');

		expect(board).to.be.ok;
		expect(button).to.be.ok;
	});

	it('should toggle isPlaying when button is clicked', () => {
		const component = renderIntoDocument(<App />);
		const button = findRenderedDOMComponentWithTag(component, 'button');

		Simulate.click(button);
		expect(component.state.isPlaying).to.true;
		Simulate.click(button);
		expect(component.state.isPlaying).to.false;
	});

	it('should update button text when button is clicked', () => {
		const component = renderIntoDocument(<App />);
		const button = findRenderedDOMComponentWithTag(component, 'button');

		expect(button.textContent).to.equal('Play');
		Simulate.click(button);
		expect(button.textContent).to.equal('Pause');
	});
});
