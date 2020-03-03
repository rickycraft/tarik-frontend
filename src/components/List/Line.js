import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export class Line extends Component {
	render() {
		const from_to = `${this.props.src} - ${this.props.dest}`;

		return (
			<ListGroup.Item action onClick={() => this.props.onClick(this.props.id)} eventKey={this.props.id}>
				<div className="d-flex justify-content-between">
					{from_to}
					<span className="mr-2">id: {this.props.id}</span>
				</div>
			</ListGroup.Item>
		);
	}
}
