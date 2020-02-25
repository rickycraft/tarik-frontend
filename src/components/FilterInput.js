import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

export class FilterInput extends Component {
	render() {
		return (
			<Form inline>
				<FormControl
					type="text"
					placeholder="New filter"
					value={this.props.value}
					onChange={this.props.onChange}
					className="mr-2"
				/>
				<Button variant="success" onClick={this.props.addFilter}>
					Search
				</Button>
			</Form>
		);
	}
}
