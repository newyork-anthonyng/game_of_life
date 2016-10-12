import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';
import Square from '../../src/components/Square';
import { expect } from 'chai';

describe('Square', () => {
	it('should render a Square', () => {
		const wrapper = renderIntoDocument(<div><Square /></div>);
		const square = findDOMNode(wrapper).children[0];

		expect(square).to.be.ok;
		expect(square.className).to.equal('square');
	});

	it('should have Alive class when alive prop is true', () => {
		const wrapper = renderIntoDocument(<div><Square alive={true} /></div>);
		const square = findDOMNode(wrapper).children[0];

		expect(square.className).to.equal('square alive');
	});

	it('should not have Alive class when alive prop is false', () => {
		const wrapper = renderIntoDocument(<div><Square alive={false} /></div>);
		const square = findDOMNode(wrapper).children[0];

		expect(square.className).to.equal('square');
	});
});
