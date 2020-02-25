import React, { Component } from 'react';
import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

export class Commands extends Component {
	render() {
		return (
			<div className="d-flex mr-2">
				<ButtonGroup aria-label="prev-next">
					<Button variant="info">{'<'}</Button>
					<Button variant="info">{'>'}</Button>
				</ButtonGroup>
				<div className="mr-3" />
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
