import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

/**
 id
 quad: ['1.1.1.1', 80, '192.168.1.100', 80], // fromip fromport toip toport
 */

export class Line extends Component {
	render() {
		const from_to = `${this.props.src} - ${this.props.dest}`;

		return (
			<ListGroup.Item action onClick={() => this.props.onClick(this.props.id)} eventKey={this.props.id}>
				<div className="d-flex justify-content-between">
					{from_to}
					<span className="mr-2">{this.props.id}</span>
				</div>
			</ListGroup.Item>
		);
	}
}
