import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Line } from './Line';

export class List extends Component {
	test = () => {
		let arr = new Array(5).fill({ quad: ['1.1.1.1', 80, '192.168.1.100', 80] });
		return arr.map((val, index) => ({ quad: val.quad, id: index }));
	};

	line = () => {
		return this.props.flows.map(flow => ({
			id: flow.id,
			quad: flow.packets[0].quad,
		}));
	};

	render() {
		// const res = this.test();
		const res = this.line();

		let lines = res.map(line => <Line id={line.id} quad={line.quad} onClick={this.props.onClick} key={line.id} />);

		return (
			<div className="flex-fill bg-light no-overflow">
				<ListGroup className="list-group-flush mb-4 scroll-container">{lines}</ListGroup>
				<div className="bg-dark" />
			</div>
		);
	}
}
