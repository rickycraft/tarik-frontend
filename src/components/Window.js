import React, { Component } from 'react';
import { List } from './List/List';
import { FlowPacket } from './Flow/FlowPacket';
import { getFlows, getFilters } from '../services/search';
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
			flowList: [],
			filters: [],
		};
	}

	componentDidMount() {
		this.updateFilters();
		document.addEventListener('keydown', this.handleKeypress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeypress);
	}

	handleKeypress = e => {
		console.log('keypress', e.keyCode);
	};

	updateView = e => this.setState({ view: e.target.value });

	updatePage = n => {
		const page = this.state.page + n;
		if (page >= 0) {
			const listLen = 20;
			const flowList = this.state.flows.slice(page * listLen, (page + 1) * listLen);
			this.setState({ page: page, flowList: flowList });
		}
	};

	updateFilters = async () => {
		const filters = await getFilters();
		this.setState({ filters: filters });
	};

	search = async selector => {
		const flows = await getFlows(selector.filter, selector.service, selector.min, selector.ago);
		this.setState({ flows: flows, page: 0 }, () => this.updatePage(0));
	};

	listClick = id => {
		const flow = this.state.flows.find(flow => flow.id === id);
		this.setState({ packets: flow.packets });
	};

	render() {
		return (
			<div className="flex-column flex-fill d-flex">
				<Navbar className="p-2 justify-content-between" bg="primary">
					<Navbar.Brand className="text-light m-0 p-0 ml-3">TARIK</Navbar.Brand>
					<div className="text-white font-weight-bold mr-2">Page: {this.state.page}</div>
				</Navbar>
				<Navbar bg="dark" variant="dark" className="text-light p-2 justify-content-between">
					<Selector className="d-flex flex-nowrap" search={this.search} filters={this.state.filters} />
					<Commands checked={this.state.view} onClick={this.updateView} updatePage={this.updatePage} />
					<FilterInput className="d-flex" updateFilters={this.updateFilters} />
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
