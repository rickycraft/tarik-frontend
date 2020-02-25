import React, { Component } from 'react';
import { Body } from './Body';
import { Card } from 'react-bootstrap';

/*
    payload
    view
    timestamp
*/

export class BodyContainer extends Component {
	render() {
		const packet = this.props.packet;

		return (
			<Card className="flex-grow-2">
				<Body body={packet.payload} view={this.props.view} timestamp={packet.timestamp} />
				<Card.Footer className="p-1 pl-2 pr-2 text-monospace" style={{ fontSize: '10px' }}>
					{packet.timestamp}
				</Card.Footer>
			</Card>
		);
	}
}
