import React, { Component } from 'react';
import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

export class Commands extends Component {
	render() {
		return (
			<div className="d-flex mr-2">
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
