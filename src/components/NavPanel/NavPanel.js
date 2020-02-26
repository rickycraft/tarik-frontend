import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Selector } from './Selector';
import { FilterInput } from './FilterInput';
import { Commands } from './Commands';

export class NavPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: '',
		};
	}

	updateFilter = e => this.setState({ filter: e.target.value });
	addFilter = () => {
		alert('added filter ' + this.state.filter);
	};

	render() {
		return (
			<>
				<Navbar className="p-2" bg="primary">
					<Navbar.Brand className="text-light m-0 p-0 ml-3">Tarik</Navbar.Brand>
					<div className="flex-fill" />
					<div className="text-white font-weight-bold mr-2">Batch: {this.props.batch}</div>
				</Navbar>
				<Navbar bg="dark" variant="dark" className="text-light p-2 justify-content-between">
					<Selector
						className="d-flex flex-nowrap"
						filter={this.props.filter}
						updateFilter={this.props.updateFilter}
						service={this.props.service}
						updateService={this.props.updateService}
						search={this.props.search}
					/>
					<Commands
						checked={this.props.view}
						onClick={this.props.updateView}
						updateBatch={this.props.updateBatch}
					/>
					<FilterInput
						className="d-flex"
						onChange={this.updateFilter}
						value={this.state.filter}
						addFilter={this.addFilter}
					/>
				</Navbar>
			</>
		);
	}
}

//export default NavPanel;
