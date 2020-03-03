import React, { Component } from 'react';
import { BodyContainer } from './BodyContainer';
import { localIp } from '../../services/utility';

export class FlowPacket extends Component {
	isInward = packet => {
		return packet.src === localIp() ? true : false;
	};

	render() {
		const packet = this.props.packets.map(packet => {
			let body;
			if (this.isInward(packet))
				body = (
					<>
						<BodyContainer packet={packet} view={this.props.view} />
						<div className="flex-grow-1" />
					</>
				);
			else
				body = (
					<>
						<div className="flex-grow-1" />
						<BodyContainer packet={packet} view={this.props.view} />
					</>
				);
			return (
				<div className="d-flex m-3" key={packet.timestamp}>
					{body}
				</div>
			);
		});

		return <div className="flex-fill flex-column scroll-container-auto">{packet}</div>;
	}
}
