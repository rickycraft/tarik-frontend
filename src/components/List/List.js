import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Line } from './Line';

export class List extends Component {
	lines = () => {
		return this.props.flows().map(flow => ({
			id: flow.id,
			src: flow.ip_src + ':' + flow.p_src,
			dest: flow.ip_dest + ':' + flow.p_dest,
		}));
	};

	render() {
		const lines = this.lines().map((line, index) => (
			<Line
				id={line.id}
				src={line.src}
				dest={line.dest}
				onClick={this.props.onClick}
				key={line.id}
				index={index}
			/>
		));

		return (
			<ListGroup className="flex-fill list-group-flush scroll-container" activeKey={this.props.index}>
				{lines}
			</ListGroup>
		);
	}
}
