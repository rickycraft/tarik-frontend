import React, { Component } from 'react';
import { ServiceSelector } from './ServiceSelector';
import { FilterSelector } from './FilterSelector';
import { Button } from 'react-bootstrap';

export class Selector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: 'all',
			filter: 'no filter',
			services: ['serv 1', 'serv 2', 'serv 3'],
			filters: ['filt 1', 'filt 2', 'filt 3'],
		};
	}

	serviceSelect = (key, e) => {
		this.setState({ service: key });
	};

	filterSelect = (key, e) => {
		this.setState({ filter: key });
	};

	render() {
		return (
			<div className="d-flex align-items-center">
				<ServiceSelector
					onSelect={this.serviceSelect}
					selected={this.state.service}
					services={this.state.services}
				/>
				<div className="mr-3" />
				<FilterSelector
					onSelect={this.filterSelect}
					selected={this.state.filter}
					filters={this.state.filters}
				/>
				<div className="mr-3" />
				<Button variant="success">X</Button>
			</div>
		);
	}
}
