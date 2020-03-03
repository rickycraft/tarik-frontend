import React, { Component } from 'react';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { ButtonSelector } from './ButtonSelector';
import { getServices } from '../../services/search';

export class Selector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			min: 1,
			ago: 0,
			service: 'all',
			filter: 'empty',
			services: [],
		};
	}

	async componentDidMount() {
		const services = await getServices();
		this.setState({ services: services });
		// this.props.search(this.state); // TODO remove in prod
	}

	updateFilter = filter => this.setState({ filter: filter });
	updateService = service => this.setState({ service: service });
	updateMin = min => this.setState({ min: parseInt(min) });
	updateAgo = ago => this.setState({ ago: parseInt(ago) });

	render() {
		const mins = [1, 3, 5, 10, 20].map(val => (
			<Dropdown.Item key={val} eventKey={val} onSelect={this.updateMin}>
				{val}min
			</Dropdown.Item>
		));

		const ago = [0, 3, 5, 10, 20].map(val => (
			<Dropdown.Item key={val} eventKey={val} onSelect={this.updateAgo}>
				{val}min
			</Dropdown.Item>
		));

		return (
			<div className="d-flex align-items-center">
				<ButtonSelector
					default="empty"
					options={this.props.filters}
					selected={'filter ' + this.state.filter}
					onSelect={this.updateFilter}
				/>
				<div className="mr-3" />
				<ButtonSelector
					default="all"
					options={this.state.services}
					selected={'service ' + this.state.service}
					onSelect={this.updateService}
				/>
				<div className="mr-3" />
				<DropdownButton
					default="1"
					title={'for ' + this.state.min + ' min'}
					variant="secondary"
					className="mr-3"
				>
					{mins}
				</DropdownButton>
				<DropdownButton default="0" title={this.state.ago + ' min ago'} variant="secondary" className="mr-3">
					{ago}
				</DropdownButton>
				<Button variant="success" onClick={() => this.props.search(this.state)}>
					Search
				</Button>
			</div>
		);
	}
}
