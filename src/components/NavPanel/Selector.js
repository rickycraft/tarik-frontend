import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonSelector } from './ButtonSelector';
import { services, filters } from '../../services/search';

export class Selector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			services: services(),
			filters: filters(),
		};
	}

	render() {
		return (
			<div className="d-flex align-items-center">
				<ButtonSelector
					default="empty"
					options={this.state.filters}
					selected={this.props.filter}
					onSelect={this.props.updateFilter}
				/>
				<div className="mr-3" />
				<ButtonSelector
					default="all"
					options={this.state.services}
					selected={this.props.service}
					onSelect={this.props.updateService}
				/>
				<div className="mr-3" />
				<Button variant="success" onClick={this.props.search}>
					Search
				</Button>
			</div>
		);
	}
}
