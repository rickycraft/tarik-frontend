import React, { Component } from 'react';
import { NavPanel } from './NavPanel/NavPanel';
import { List } from './List/List';
import { FlowPacket } from './Flow/FlowPacket';
import { result } from '../services/search';

export class Window extends Component {
	constructor(props) {
		super(props);
		this.state = { view: '0', batch: 0, flows: [], packets: [], filter: 'empty', service: 'all' };
	}

	updateView = e => this.setState({ view: e.target.value });

	updateBatch = n => {
		const batch = this.state.batch + n;
		if (batch >= 0) this.setState({ batch: batch });
		this.search();
	};

	updateFilter = filter => this.setState({ filter: filter });
	updateService = service => this.setState({ service: service });

	search = () => {
		const flows = result(this.state.service, this.state.filter, this.state.batch);
		this.setState({ flows: flows });
	};

	listClick = id => {
		const flow = this.state.flows.find(flow => flow.id === id);
		this.setState({ packets: flow.packets });
	};

	render() {
		return (
			<div className="flex-column flex-fill d-flex">
				<NavPanel
					updateView={this.updateView}
					view={this.state.view}
					updateBatch={this.updateBatch}
					batch={this.state.batch}
					filter={this.state.filter}
					updateFilter={this.updateFilter}
					service={this.state.service}
					updateService={this.updateService}
					search={this.search}
				/>
				<div className="flex-grow-1 d-flex no-overflow">
					<div className="d-flex flex-grow-1 no-overflow">
						<List onClick={this.listClick} flows={this.state.flows} />
					</div>
					<div className="d-flex flex-grow-2 no-overflow">
						<FlowPacket view={this.state.view} packets={this.state.packets} />
					</div>
				</div>
			</div>
		);
	}
}
