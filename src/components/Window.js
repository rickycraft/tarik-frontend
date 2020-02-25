import React, { Component } from 'react';
import { NavPanel } from './NavPanel';
import { List } from './List';
import { FlowPacket } from './Flow/FlowPacket';
import { result } from '../services/search';

export class Window extends Component {
	constructor(props) {
		super(props);
		this.state = { view: '0', batch: 0, packets: result() };
	}

	updateView = e => this.setState({ view: e.target.value });

	updateTimestamp = n => {
		const batch = this.state.batch + n;
		this.setState({ batch: batch });
	};

	render() {
		return (
			<div className="flex-column flex-fill d-flex">
				<NavPanel updateView={this.updateView} view={this.state.view} />
				<div className="flex-grow-1 d-flex">
					<div className="d-flex flex-grow-1">
						<List />
					</div>
					<div className="d-flex flex-grow-2">
						<FlowPacket view={this.state.view} packets={this.state.packets} update={this.updateTimestamp} />
					</div>
				</div>
			</div>
		);
	}
}
