import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

/**
 id
 quad: ['1.1.1.1', 80, '192.168.1.100', 80], // fromip fromport toip toport
 */

export class Line extends Component {
	render() {
		const quad = this.props.quad;
		const body = `${quad[0]}:${quad[1]} - ${quad[2]}:${quad[3]}`;

		return (
			<ListGroup.Item action onClick={() => this.props.onClick(this.props.id)} eventKey={this.props.id}>
				<div className="d-flex justify-content-between">
					{body}
					<span className="mr-2">{this.props.id}</span>
				</div>
			</ListGroup.Item>
		);
	}
}
