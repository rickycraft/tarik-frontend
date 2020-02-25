import React, { Component } from 'react';
import { BodyContainer } from './BodyContainer';
import { localIp } from '../../services/utility';

export class FlowPacket extends Component {
	isInward = packet => {
		return packet.quad[2] === localIp() ? true : false;
	};

	render() {
		let packet = this.props.packets.map(packet => {
			if (this.isInward(packet))
				return (
					<div className="d-flex m-3" key={packet.timestamp}>
						<BodyContainer packet={packet} view={this.props.view} />
						<div className="flex-grow-1" />
					</div>
				);
			else
				return (
					<div className="d-flex m-3" key={packet.timestamp}>
						<div className="flex-grow-1" />
						<BodyContainer packet={packet} view={this.props.view} />
					</div>
				);
		});

		return <div className="flex-fill flex-column">{packet}</div>;
	}
}

//export default FlowPacket;
