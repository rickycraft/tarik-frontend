import React, { Component } from 'react';
import { List } from './List/List';
import { FlowPacket } from './Flow/FlowPacket';
import { result } from '../services/search';
import { Navbar } from 'react-bootstrap';
import { Selector } from './NavPanel/Selector';
import { FilterInput } from './NavPanel/FilterInput';
import { Commands } from './NavPanel/Commands';

export class Window extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: '0',
			page: 0,
			flows: [],
			packets: [],
			filter: 'empty',
			service: 'all',
			min: 1,
			flowList: [],
		};
	}

	updateView = e => this.setState({ view: e.target.value });

	updatePage = n => {
		const page = this.state.page + n;
		if (page >= 0) {
			const listLen = 20;
			const flowList = this.state.flows.slice(page * listLen, (page + 1) * listLen);
			this.setState({ page: page, flowList: flowList });
		}
	};

	updateFilter = filter => this.setState({ filter: filter });
	updateService = service => this.setState({ service: service });
	updateMin = min => this.setState({ min: min });

	search = async () => {
		const flows = result(this.state.service, this.state.filter, this.state.page);
		await this.setState({ flows: flows });
		// await this.setState({ flows: this.test() });
		await this.setState({ page: 0 });
		this.updatePage(0);
	};

	listClick = id => {
		const flow = this.state.flows.find(flow => flow.id === id);
		this.setState({ packets: flow.packets });
	};

	test = () => {
		let arr = new Array(100).fill({});
		return arr.map((val, index) => ({ packets: [{ quad: ['1.1.1.1', 80, '192.168.1.100', 80] }], id: index }));
	};

	render() {
		return (
			<div className="flex-column flex-fill d-flex">
				<Navbar className="p-2" bg="primary">
					<Navbar.Brand className="text-light m-0 p-0 ml-3">Tarik</Navbar.Brand>
					<div className="flex-fill" />
					<div className="text-white font-weight-bold mr-2">
						Last {this.state.min} min / Page: {this.state.page}
					</div>
				</Navbar>
				<Navbar bg="dark" variant="dark" className="text-light p-2 justify-content-between">
					<Selector
						className="d-flex flex-nowrap"
						filter={this.state.filter}
						updateFilter={this.updateFilter}
						service={this.state.service}
						updateService={this.updateService}
						search={this.search}
					/>
					<Commands
						checked={this.state.view}
						onClick={this.updateView}
						updatePage={this.updatePage}
						min={this.state.min}
						updateMin={this.updateMin}
					/>
					<FilterInput className="d-flex" addFilter={this.addFilter} />
				</Navbar>
				<div className="flex-grow-1 d-flex no-overflow">
					<div className="d-flex flex-grow-1 no-overflow">
						<List onClick={this.listClick} flows={this.state.flowList} />
					</div>
					<div className="d-flex flex-grow-2 no-overflow">
						<FlowPacket view={this.state.view} packets={this.state.packets} />
					</div>
				</div>
			</div>
		);
	}
}
