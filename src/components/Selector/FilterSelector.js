import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export class FilterSelector extends Component {
	render() {
		const filters = this.props.filters.map((filter, i) => (
			<Dropdown.Item key={i} eventKey={filter} onSelect={this.props.onSelect}>
				{filter}
			</Dropdown.Item>
		));

		return (
			<div>
				<DropdownButton id="filter-selector" title={this.props.selected} variant="info">
					{filters}
					<Dropdown.Divider />
					<Dropdown.Item onSelect={this.props.onSelect} eventKey="no filter">
						no filter
					</Dropdown.Item>
				</DropdownButton>
			</div>
		);
	}
}
