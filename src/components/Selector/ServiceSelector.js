import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export class ServiceSelector extends Component {
	render() {
		const services = this.props.services.map((service, i) => (
			<Dropdown.Item key={i} eventKey={service} onSelect={this.props.onSelect}>
				{service}
			</Dropdown.Item>
		));

		return (
			<div>
				<DropdownButton id="service-selector" title={this.props.selected} variant="secondary">
					{services}
					<Dropdown.Divider />
					<Dropdown.Item onSelect={this.props.onSelect} eventKey="all">
						all
					</Dropdown.Item>
				</DropdownButton>
			</div>
		);
	}
}
