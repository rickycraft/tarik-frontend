import React, { Component } from 'react';
import { BodyContainer } from './BodyContainer';
import { localIp } from '../../services/utility';

export class FlowPacket extends Component {
	render() {
		const packets = this.props.packets().map(packet => {
			const inward = packet.src === localIp();
			return (
				<div className="d-flex m-3" key={packet.timestamp}>
					{inward ? <div style={{ width: '20%' }} /> : ''}
					<BodyContainer packet={packet} view={this.props.view} />
					{!inward ? <div style={{ width: '20%' }} /> : ''}
				</div>
			);
		});

		return <div className="d-flex flex-fill flex-column scroll-container-auto">{packets}</div>;
	}
}
