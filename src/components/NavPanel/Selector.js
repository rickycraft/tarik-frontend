import React, { Component } from 'react';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { ButtonSelector } from './ButtonSelector';
import { getServices } from '../../services/search';

export class Selector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			min: 1,
			ago: 1,
			service: 'all',
			filter: 'empty',
			services: [],
		};
	}

	async componentDidMount() {
		const services = await getServices();
		this.setState({ services: services });
	}

	updateFilter = filter => this.setState({ filter: filter });
	updateService = service => this.setState({ service: service });
	updateMin = min => this.setState({ min: min });
	updateAgo = ago => this.setState({ ago: ago });

	render() {
		const opt = [1, 3, 5, 10, 20];

		const mins = opt.map(val => (
			<Dropdown.Item key={val} eventKey={val} onSelect={this.updateMin}>
				for {val}min
			</Dropdown.Item>
		));

		const ago = opt.map(val => (
			<Dropdown.Item key={val} eventKey={val} onSelect={this.updateAgo}>
				{val}min ago
			</Dropdown.Item>
		));

		return (
			<div className="d-flex align-items-center">
				<ButtonSelector
					default="empty"
					options={this.props.filters}
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
				<DropdownButton
					default="1"
					title={this.state.min}
					id="dropdown-min"
					className="mr-3"
					variant="secondary"
				>
					{mins}
				</DropdownButton>
				<DropdownButton
					default="1"
					title={this.state.ago}
					id="dropdown-ago"
					className="mr-3"
					variant="secondary"
				>
					{ago}
				</DropdownButton>
				<Button variant="success" onClick={() => this.props.search(this.state)}>
					Search
				</Button>
			</div>
		);
	}
}
