import React, { Component } from 'react';
import { NavPanel } from './NavPanel';
import { List } from './List';
import { FlowPacket } from './FlowPacket';

export class Window extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="flex-column flex-fill d-flex">
				<NavPanel />
				<div className="flex-grow-1 d-flex">
					<div className="d-flex flex-grow-1">
						<List />
					</div>
					<div className="d-flex flex-grow-2">
						<FlowPacket />
					</div>
				</div>
			</div>
		);
	}
}

//export default Window;
