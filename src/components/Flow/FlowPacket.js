import React, { Component } from 'react';
import { BodyContainer } from './BodyContainer';
import { localIp } from '../../services/utility';

export class FlowPacket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			packets: [
				{
					payload: 'Header: \nciao andata',
					timestamp: 10,
					language: 'http',
					quad: ['1.1.1.1', 80, '192.168.1.100', 80], // fromip fromport toip toport
				},
				{
					payload: 'Header: \nciao ritorno',
					timestamp: 11,
					language: 'text',
					quad: ['192.168.1.100', 80, '1.1.1.1', 80], // fromip fromport toip toport
				},
			],
		};
	}

	isInward = packet => {
		return packet.quad[2] === localIp() ? true : false;
	};

	render() {
		let packet = this.state.packets.map(packet => {
			if (this.isInward(packet))
				return (
					<div className="d-flex m-3" key={packet.timestamp}>
						<BodyContainer packet={packet} />
						<div className="flex-grow-1" />
					</div>
				);
			else
				return (
					<div className="d-flex m-3" key={packet.timestamp}>
						<div className="flex-grow-1" />
						<BodyContainer packet={packet} />
					</div>
				);
		});

		return <div className="flex-fill flex-column">{packet}</div>;
	}
}

//export default FlowPacket;
