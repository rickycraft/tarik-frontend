import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Line } from './Line';

export class List extends Component {
	onClick = e => console.log(e.target.value);

	render() {
		let res = [{ quad: ['1.1.1.1', 80, '192.168.1.100', 80], id: 100 }];

		let lines = res.map(line => <Line id={line.id} quad={line.quad} onClick={this.onClick} key={line.id} />);

		return (
			<div className="flex-fill bg-dark">
				<ListGroup className="m-3 ">{lines}</ListGroup>
			</div>
		);
	}
}
