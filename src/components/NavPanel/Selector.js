import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonSelector } from './ButtonSelector';
import { services, filters } from '../../services/search';

export class Selector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: 'empty',
			service: 'all',
			services: services(),
			filters: filters(),
		};
	}

	loadSelector = () => {
		// load from server
	};

	updateFilter = filter => this.setState({ filter: filter });
	updateService = service => this.setState({ service: service });
	search = () => {
		console.dir({ filter: this.state.filter, state: this.state.service });
	};

	render() {
		return (
			<div className="d-flex align-items-center">
				<ButtonSelector
					default="empty"
					options={this.state.filters}
					selected={this.state.filter}
					onSelect={this.updateFilter}
				/>
				<div className="mr-3" />
				<ButtonSelector
					default="all"
					options={this.state.services}
					selected={this.state.service}
					onSelect={this.updateService}
				/>
				<div className="mr-3" />
				<Button variant="success" onClick={this.search}>
					Search
				</Button>
			</div>
		);
	}
}
