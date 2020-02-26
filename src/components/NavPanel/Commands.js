import React, { Component } from 'react';
import { Button, ButtonGroup, ToggleButton, DropdownButton, Dropdown } from 'react-bootstrap';

export class Commands extends Component {
	render() {
		let opt = [1, 3, 5, 10, 20];

		opt = opt.map(val => (
			<Dropdown.Item key={val} eventKey={val} onSelect={this.props.updateMin}>
				{val}
			</Dropdown.Item>
		));

		return (
			<div className="d-flex mr-2">
				<DropdownButton default="1" title={this.props.min} id="dropdown-min">
					{opt}
				</DropdownButton>
				<ButtonGroup aria-label="prev-next" className="mx-3">
					<Button variant="info" onClick={() => this.props.updatePage(-1)}>
						{'<'}
					</Button>
					<Button variant="info" onClick={() => this.props.updatePage(1)}>
						{'>'}
					</Button>
				</ButtonGroup>
				<ButtonGroup toggle>
					<ToggleButton
						type="radio"
						name="radio"
						value="0"
						onClick={this.props.onClick}
						checked={this.props.checked === '0'}
					>
						Text
					</ToggleButton>
					<ToggleButton
						type="radio"
						name="radio"
						value="1"
						onClick={this.props.onClick}
						checked={this.props.checked === '1'}
					>
						Http
					</ToggleButton>
					<ToggleButton
						type="radio"
						name="radio"
						value="2"
						onClick={this.props.onClick}
						checked={this.props.checked === '2'}
					>
						HEX
					</ToggleButton>
				</ButtonGroup>
			</div>
		);
	}
}
