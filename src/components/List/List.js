import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Line } from './Line';

export class List extends Component {
	lines = () => {
		return this.props.flows.map(flow => ({
			id: flow.id,
			src: flow.ip_src + ':' + flow.p_src,
			dest: flow.ip_dest + ':' + flow.p_dest,
		}));
	};

	render() {
		const lines = this.lines().map(line => (
			<Line id={line.id} src={line.src} dest={line.dest} onClick={this.props.onClick} key={line.id} />
		));

		return (
			<div className="flex-fill bg-light no-overflow">
				<ListGroup className="list-group-flush mb-4 scroll-container">{lines}</ListGroup>
				<div className="bg-dark" />
			</div>
		);
	}
}
