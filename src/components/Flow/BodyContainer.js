import React, { Component } from 'react';
import { Body } from './Body';
import { Card } from 'react-bootstrap';

export class BodyContainer extends Component {
	render() {
		const packet = this.props.packet;

		return (
			<Card style={{ width: '80%' }}>
				<Body body={packet.content} view={this.props.view} id={packet.id} />
				<Card.Footer className="py-1 px-2 text-monospace" style={{ fontSize: '10px' }}>
					{packet.timestamp}
				</Card.Footer>
			</Card>
		);
	}
}
