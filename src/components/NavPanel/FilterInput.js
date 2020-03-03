import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { addFilter } from '../../services/update';

export class FilterInput extends Component {
	constructor(props) {
		super(props);
		this.state = { filter: '' };
	}

	onChange = e => this.setState({ filter: e.target.value });

	addFilter = () => {
		if (this.state.filter !== '') {
			addFilter(this.state.filter);
			this.setState({ filter: '' });
		} else this.props.updateFilters();
	};

	render() {
		return (
			<Form inline>
				<FormControl
					type="text"
					placeholder="New filter"
					value={this.state.filter}
					onChange={this.onChange}
					className="mr-2"
				/>
				<Button variant="success" onClick={this.addFilter}>
					Search
				</Button>
			</Form>
		);
	}
}
