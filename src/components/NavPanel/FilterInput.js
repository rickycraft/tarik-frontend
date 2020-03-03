import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { addFilter } from '../../services/search';

export class FilterInput extends Component {
	constructor(props) {
		super(props);
		this.state = { filter: '' };
	}

	onChange = e => this.setState({ filter: e.target.value });

	insertFilter = async () => {
		if (this.state.filter !== '') {
			await addFilter(this.state.filter);
			this.setState({ filter: '' });
		} else await this.props.updateFilters();
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
				<Button variant="success" onClick={this.insertFilter}>
					Search
				</Button>
			</Form>
		);
	}
}
