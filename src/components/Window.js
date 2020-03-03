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
			index: 0,
			flows: [],
			packets: [],
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
		// console.log('keypress', e.keyCode);
		const index = this.state.index;
		switch (e.keyCode) {
			case 39:
				this.updatePage(1);
				break;
			case 37:
				this.updatePage(-1);
				break;
			case 38:
				this.updateIndex(index - 1);
				break;
			case 40:
				this.updateIndex(index + 1);
				break;
			default:
				break;
		}
	};

	updateView = e => this.setState({ view: e.target.value });

	updateFilters = async () => {
		const filters = await getFilters();
		this.setState({ filters: filters });
	};

	updatePage = n => {
		const page = this.state.page + n;
		if (page > -1 && this.bound.max < this.state.flows.length - 1) this.setState({ page: page });
	};

	updateIndex = index => {
		if (index < this.bound.min || index > this.bound.max) return;
		this.setState({ index: index });
	};

	flowList = () => this.state.flows.slice(this.bound.min, this.bound.max + 1);

	packetList = () => {
		try {
			return this.state.flows[this.state.index].packets;
		} catch {
			return [];
		}
	};

	search = async selector => {
		const flows = await getFlows(selector.filter, selector.service, selector.min, selector.ago);
		this.setState({ flows: flows, page: 0, index: 0 });
	};

	render() {
		return (
			<div className="flex-column flex-fill d-flex">
				<Navbar className="p-2 justify-content-between" bg="primary">
					<Navbar.Brand className="text-light m-0 p-0 ml-3">TARIK</Navbar.Brand>
					<div className="text-white font-weight-bold mr-2">Page: {this.state.page}</div>
				</Navbar>
				<Navbar bg="dark" variant="dark" className="text-light p-3 justify-content-between">
					<Selector className="d-flex flex-nowrap" search={this.search} filters={this.state.filters} />
					<Commands checked={this.state.view} onClick={this.updateView} updatePage={this.updatePage} />
					<FilterInput className="d-flex" updateFilters={this.updateFilters} />
				</Navbar>
				<div className="d-flex flex-fill no-overflow">
					<div className="d-flex no-overflow" style={{ width: '30vw' }}>
						<List onClick={this.updateIndex} flows={this.flowList} index={this.state.index} />
					</div>
					<div className="d-flex no-overflow" style={{ width: '70vw' }}>
						<FlowPacket view={this.state.view} packets={this.packetList} />
					</div>
				</div>
			</div>
		);
	}

	get bound() {
		const listLen = 20;
		const min = this.state.page * listLen;
		const max = min + listLen;
		const len = this.state.flows.length;
		return {
			min: min,
			max: max < len ? max : len - 1,
		};
	}
}
