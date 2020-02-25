import React, { Component } from 'react';
import { NavPanel } from './NavPanel';
import { List } from './List';
import { FlowPacket } from './Flow/FlowPacket';

export class Window extends Component {
	constructor(props) {
		super(props);
		this.state = { view: '0' };
	}

	updateView = e => this.setState({ view: e.target.value });

	render() {
		return (
			<div className="flex-column flex-fill d-flex">
				<NavPanel updateView={this.updateView} view={this.state.view} />
				<div className="flex-grow-1 d-flex">
					<div className="d-flex flex-grow-1">
						<List />
					</div>
					<div className="d-flex flex-grow-2">
						<FlowPacket view={this.state.view} />
					</div>
				</div>
			</div>
		);
	}
}
