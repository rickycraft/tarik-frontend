import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export class ButtonSelector extends Component {
	render() {
		const options = this.props.options.map((service, i) => (
			<Dropdown.Item key={i} eventKey={service} onSelect={this.props.onSelect}>
				{service}
			</Dropdown.Item>
		));

		return (
			<div>
				<DropdownButton id={this.props.default} title={this.props.selected} variant="secondary">
					{options}
					<Dropdown.Divider />
					<Dropdown.Item onSelect={this.props.onSelect} eventKey={this.props.default}>
						{this.props.default}
					</Dropdown.Item>
				</DropdownButton>
			</div>
		);
	}
}
