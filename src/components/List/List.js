import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Line } from './Line';

export class List extends Component {
	onClick = e => console.log(e.target.value);

	test = () => {
		let arr = new Array(5).fill({ quad: ['1.1.1.1', 80, '192.168.1.100', 80] });
		return arr.map((val, index) => ({ quad: val.quad, id: index }));
	};

	render() {
		const res = this.test();

		let lines = res.map(line => <Line id={line.id} quad={line.quad} onClick={this.onClick} key={line.id} />);

		return (
			<div className="flex-fill bg-light no-overflow">
				<ListGroup className="list-group-flush mb-4 scroll-container">{lines}</ListGroup>
				<div className="bg-dark" />
			</div>
		);
	}
}
